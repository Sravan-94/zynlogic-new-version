import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

// Image and project name configuration - EASILY CHANGE IMAGES AND NAMES HERE
// Add or modify image URLs and project names as needed

// Image configuration - ALL 40 PROJECTS
const projectImages = {
  // Project 1-20 images
  project1: "https://media-hosting.imagekit.io/2cd0f8c04e9c468b/original-438c01314162ba2f8862925.png?Expires=1841381485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ikw017d209sRPSYRlOH6I9gApSaIb1j0RWe30hgVVvnj~-U9i-PHerYWjef8vMqfauM-MzXI9YDQwW~E0Iq1NY8k6akReQDClnYEJFek8TTYf0SfJr65gY~WJGHjnd~sy1O4G0dVRCe3o--ZX~QtSkjBW3E7TYTgnBdd2Q08aXa0ddw~uUYee2Kj4se3WfrKndnJerdeFjAPY~RnLV4vCpgMFD9aq~rqcvWnzwlQZQZfRGryYEeeQP-jxibvcxwuOpOnEmeYstpC6m1sN-r4I8wjwYcPQ3P6rTGrYgsrvkDjLAHZZsuR6HJDaa3cPdnizTC6zSsIcVX5rnSBqO6xDA__",
  project2: "https://media-hosting.imagekit.io/d8ae62a6e2514bf9/e%20commerce%20website.webp?Expires=1841392611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uEsXavfrWvF2ctwIs~m344FBqMU6o4eMFE-5ZY-6qW4u8evl0FW6hSChl1T6i8Mr5m9ySdpiAKps8ErUf7dEG0C3vOfPUx8dSe6tDLz0NgYrgbGjxI1XfoZE94WTNpJfuzSnInvrvM2m-4V7yf65KgzjMAGBWM7CC5WaKNqnKLp7pI7CYCNoeTTQiE4KZJWI3~QosIzUh77ZGVX1koFGXenQxX4T85rbizI2n82kVwKAEK8p~jTUbWsbFY6KY3NR4W7ru1B~yA5xyEPE76FCpdLjtTtl8HThBiB8a0vkhSyLXCu2XZab72Krlz-lVXSrUDqKI~mykw7xbuASHHquFQ__",
  project3: "https://media-hosting.imagekit.io/fe31d2bbeb7249fa/WhatsApp%20Image%202025-05-05%20at%2020.27.08_3162a3c5.jpg?Expires=1841223576&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r611GPiZ3PxyDZK5AVlWPuD1ZU52B0rwJucJoHuCLbzGr6PjkKjuPAHNNIknxZvQ1l8ema-0-wav4EUVjFIn7PFU~LlGfDsC33EZIfkEgUnEjcGWrFxp5yPo7h-h3EfYLwg~HqIJDojlbrt2EdoAUYw~MrcwtKzPqTvOb36IJFeMQm0u9svz2OL-uff4QlLH60mmZG125XpFFS7UsIuiFd7uf5rEHLJg5alzLaC23bD8Lvpu6dbz27LVqCZY6aUkVC15qlyEW-jcNEVeuYGQgROBcNB7Wls-mt0bE4xRQxgbRIV0FYV7iFmSWtCuwC3SbbLiGenJhsJh9yRZGeIKYA__",
  project4: "https://media-hosting.imagekit.io/e8a338626b6f44ee/WhatsApp%20Image%202025-05-05%20at%2020.27.04_e45d455b.jpg?Expires=1841223510&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2JrfR2zP6vdCMcsrTNk8PgbVgxL~wKjanlJ3Yf9WskMUmqEjh7pJmkVtdtvOelYAypB0dS7UiUyY0263jVySIyvN7x4w5cXoa4VxKbzkFLarr9wk93AatGzUfGpU8s4kFQzQx657M-m~ReqWdWVhKo7cUMZNXau2EHXWoKmZg8ezD8MaBze0QBSKE25zKV8EK9I0DyDC~VG6CTB3mdP~QzGD4Eb7dov7LqUD8k0myZnwxJ--OQeI9j2SZZ4tD0vUXFz86LDdRT96NcdaUlmv5vi-kdstAqAyEkv9Nd4U1pLTUWR7J9uCeHL7639hh46vkUfDene88e9SpeFrx1OzQg__",
  project5: "https://media-hosting.imagekit.io/00744f4565cc4dfc/WhatsApp%20Image%202025-05-05%20at%2018.07.32_4df0bd09.jpg?Expires=1841392277&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LPhEFIQzYYsr9mtqU87VZBbtWdjeqsqDs2Zs99SHbcNOMscMtGMyFLdSCPS5lCtEv56s2BzIfR9jM4fSMpvHu2LxIZxnScoU13H5hA7ypSIfov6FrOjrsHNWSJIc~hQQofgvq5mLWpbfwm~OiKLKj1fijTdTfrIkW2l7e0yT7hZR8myh6E-C1FZHJyTT8smAtzXyzqZaJvMGoVqsauz~U-Rf2RP5KU-jrhezblN5fZadkLChWgYlHSWPGHSvahnD139FJqGblvU1piBnzO-ntAutvDOlZUuRsRCSbuXgWo~RCM08Rgra3jjXkSDWbJmFjEL7yx4IIunlVxkxuy-3jg__",
  project6: "https://media-hosting.imagekit.io/8db41e1f0ae549c4/WhatsApp%20Image%202025-05-05%20at%2018.07.32_aad7af30.jpg?Expires=1841392308&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GHhyyMKEMq~d8M2pzkXtDcdNoxIaWrtXihjlCIEiXCFoFkG8jBDtB5ktg1L9DvuQDFdEAZdzP9J8GLEi8bjfNOthSGm5aYXp96KmH2FqjEPgH9kNEYT-CxN5dEAGH~Bud90ysJyilgP76nhzczVhKVCI6WhaP9YDwFfhffI84tLY9z7MZx6uZfIyajqAQPJSTWPtEJE-G3tuKcCNqF7Q5OCTPgFZ7m0cjumlWOwluG~XwyQFvoyLiqPnPG3KyQjC8SSra~JHs8~JIX9XL9G8J0Gv9S8Pudq5UBmnD7-r7sykj8uZF9ul9H~x6mXRrRXwLG7H-RAKMCTkT4NdZ~oLqA__",
  project7: "https://media-hosting.imagekit.io/86ef75f5ed1c4b8d/original-c6dd40175c8a9b145a8d4be70251b016%20(1).webp?Expires=1841392899&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SCQGoMA3nEKVsQKLXaeQ4ZnwIvhJhbAauQuX38c50OhH3~Q7h3WfaO3klNoL5AVBpWURSYd~V3xyQOHr9PC2GI01x8cAqLldLFG3apAttqeWnkHPCHF4c4uw-1vBJ83Lt9CzHOSvJKX8j2Mcpa7HrFXb68TcrNw4BFicXvxtWEC2tzPhW1zyA6dJ8Ash8tKQ0tJTLU-CquDgYt~TK1lQ72apJ7051x9C~rDezKrtV57P2OSgxVMZExS2xUz3a6uDSEKDm67au4l3XUG7GKV-H37HftvK66tl-qwFMK8qpT8coPeqapaGUThENfB7WlsuJOS2RmHrO~oRiOO22wYZwg__",
  project8: "https://media-hosting.imagekit.io/bee5abbab3c34a0f/original-607c4046b95f524e84b17cbac3ba0809.webp?Expires=1841393306&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fi5mV7-BJNwCu2eXQ4~kAJDbEecP0HDYm3HDVP2KswLB8pBjK1XqdbrckdVmnvVyI~lJ7TDz~PmSaFkV5qMZqvEyBvA--Y6e4LzMWAZ60hTFVUpqZgVMx392Y7yfFgd8U7c4j53XDa2VgwtUwnhwx5xu9osWrdEsmOd4LhxNlXuH0kiz1Hfo5ij0MAohjUmZdI9onn9PfLMM8FDArIcwkHyOXPXSz~5YLg5bD24ZxUHf6iAuOzNV2R65P5peLifdmyVKne0lR59xWGV4aufdHRdluSLng9eoM98vK1boiBpi~j95zoKU7Dy8e52fbuZ5erH0SIIcgN-Gztpj34bIbw__",
  project9: "https://media-hosting.imagekit.io/645ab96ddfc84a54/original-96614202a90ce703c56a93f49ce86e54.webp?Expires=1841393764&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lBigTRntq64zSfvWwp0IF9q1XtmUxNXa43itXiQclGSm4jQyuRbI2OAatrhEb0PBcHePNzQXH2f0LE0n~LtPqP3xHalPMzZFIcuOyt3C~JRIZ~eLp2sIwuD4Pm~vimfDR2~D-AR8iyHv0QFx0HaQuOwrmQPsy5X22uvlDEHBbjIr~-FpeRbW9BlgAKuNgwm~65FdvypKfr3a1i6AEZ9IGTqgvdoxQVkj8tMjSr4u3C5iAtS47J5z-NlFcOfPgO3AP~T0whqVloq2bdTErY6Qc2NLkoVSXYNHweERPULnFTn~PYoPp8X1yHq43ppLQLzj3ImIzC~2HzPLKY4dk-~a0A__",
  project10: "https://media-hosting.imagekit.io/df6cf87e6adb4464/original-24dc58dfa3c45fbc3b4025d7c9b56c88.webp?Expires=1841393796&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r58ULBgatdGUYwE7Vi0muZi7ai6MSbGp9IatR2SyJyAAnhm7~aeLnh9-GNVyBPYA8js-tKgDg-vAle1iz0nR~O2Y6c3rBdvgDuw6UBp-P95RnXTmCFE8mlqq2GuWZ1Si6dQiXM3Bb1Bt8Mw1Hsm77yzhbSLKb4onyVTR~KO8XUshitTcbN6fYZ7~NjSfKauJmm8gIfzYxMVXqRZQ3GItiNMS0wULSGOCO4UB8ERex9BERqtHu7HExHftxay2jN2OAHdp4TuxRqWro450totJrknpVi0AxxLTb9EwGYwwvb0FtckLdSsUBk-dPIcS71WZ4XLz3Aq--SlWsEVDX-8-~g__",
  project11: "https://media-hosting.imagekit.io/77f1c789ae1c4344/original-6e0c67b2a750d1a7b76cb6d6e5f1af53.webp?Expires=1841394074&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nWamCBIbckAqzSK3RmW~WatJCMSXAcVrQfCjkRiayCnA7JdVYgx8ChTsT1keEN9dWY~S0a~-Q68n~qymtgp6F6dXa36rw90qAtcvmaKQAXUbAS0XOYE~hsE7a7eRn28jq1cuQeYglhSz0zqdIoiVXaGcmCTVDW96HxrwASiQIaFyCNlz3YWmo5WVYrjPla-ixZ-S2GcDdHgy-io6xT2DGHqaO6NA8Mo2UXP6E8BUkJTygnbhclA4KmK0dKTZohftwifvSstGVcR0qlYbpIm2~ZTfF8J3X-Mwf6ynLh28mLSkuHyja~ZRhY0Dt0P8uhYysiuulZdUb24E0pENDVKIFA__",
  project12: "https://media-hosting.imagekit.io/7510edabdf334dcb/original-9578ca83a4719c58f1625f9d245b4a8f.webp?Expires=1841394120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=T2zWKca5NZiXjilhhAnDdFyjAl94SNQB3YFsP~q90wewvk7y9EsliieK0mxbSEUhUMOiqVil5skby3NIxJLtFTjdrzjAYS4JwnQAlbq6nPjbNI58eFJkS4RsSz8Eaap4D~WEokBYtTosaSZXmCrtLLVpuSQlaIpvQT7OvkUCO6FkWM5jPKoypoSbHdpqoTDvyJra4YOo2UtNadx-VLwBUarsiUR1IoghjwzjNMrWJYEcwZuip2WeF2SDpNYXKuGvomw6DLK6RVTyKRYjY41C6T7SxqsBQGvbvlCjRitbzsGfKmck4HJzMlwo0ZlLsuNhmNrgBx8hUiBPG4vL-u9MNQ__",
  project13: "https://media-hosting.imagekit.io/eff5d09bc6304e1b/original-f110065470d47ca6eb280dd64b78e478.webp?Expires=1841394676&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gTgi7NR0bMpP0Q0FA4hzp30ov-FWDX2-qXM3C2y3A4bjgt-a9FO8dP9dVx1xuEsZlvcH7OYJEA2VMdwdvhvMw0c7dT6j0pQZ2fRXjlNmVxQ8bSruColgpmJ4cR4ZZids~DrK69zX6Lw7omt-ZujubY-7BLN5jcWb~nm0wfi4cSmMLs45SMTMY989sjPX5jpn3C8jNLqESOro-ZJJw~iwSlElGJr6Jx0LNL-avQWL7LGRbDcMWcwp0MOXfLU3nqxUkna9IdZDhoZQIi8V20FRAyR0-1mFICapXgOrYc-9czZvTmnq9B~Lg025VC44rCHFYQhxsIG6dAiCSTva5~Hb~A__",
  project14: "https://media-hosting.imagekit.io/2e90e946a2764c5f/original-81744443f106ffcaef6907ea88b5f229.webp?Expires=1841394751&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1j8KngJuxZue63S3h5HXxDinlPwNhr4VMtqc756eJdlZ7nX3lG76jg8ymGhs6W988lvsB0BvzyNYOp2usO7Abnehs1-7L5r3ccQLs4ZwCHGW7thZLlWUfpijVQa72NjDPcIxXX0RxdML0Ji7zbOelN6EyhpRzoY4R4UpjkojMLyELAy2zLXtfFQQ79q3D5Oj-sloGTo0UurIa5FVKTlX8Sqw2GaWUBLsXtSB0BrGMXiBYs5BOtNWiR489tvznQMPFXZ7rtiWT8Rv0GYis8Yka-7vhF1FnfjYeZSTSWeUD5EGiJF~hMzxzGQHOE4ofmx7i8U7TrZ-0PZDUAYReAltTA__",
  project15: "https://media-hosting.imagekit.io/b2f63518faad474d/original-0cbceb2b514653075bebfda17ed40e81.webp?Expires=1841394993&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aCZWwnReCAyrJYF8fXBBB3Xz6eije~Hink4veUd0OCLspGANYW1bOjP4yl~OK43D14O1geJ5mcTVxTYF0kz6ggTndJXT~MqvKAoGe--gjm5firtWTW8ccxnQ5O2CTmyrV4ye3aZPzOVrdRF9yIMOlF2suPjt22GT03DWp4e1hNjUOQgMLRLUCRqSigqSFJ9GgxlIvHa3rEOnwsai-XGd5DS5g0swCGGOWdY1s8eZQIAp2frgM1xGBYliSrJ1uISpnf4Qtaq6it4tMuUCwtxNhW2s5Wfn8gvI7rUWDPVpsuHkOdb3Y8duujmQlzdM0LMIOjLdtv1FdHa~L80LXtJJZA__",
  project16: "https://media-hosting.imagekit.io/3f8597c685b64fa6/original-32be5e984093054360bf86a4415ad244.webp?Expires=1841395016&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Xog-ZFxjwgebqVXrQVQVbDQAjQRWJRjBd~zWmbnAmbhVPpGCY6JkyGDVr6aky8Nw1Lo9Q5qcRJ00K8g-rBLEGrzJobmtYtXWJ57h7sBJgdvUY-60g75Q4Dnb2c0UZYIGOzxjcpYULKoi94sMe96s~2-Hr4Ll8Wru5twZVaz8Gdh4oDwMBeR7EM0wQEjhL2rJYnFo2qU~UWFgVxH8~ctFHBHGXqawZud9OxiUbKz04LIFhz2EesIE5XTshmP8rpgaFf7QmCTsmnwiVMY0RK9dnwvpxxPdVZtRHtKBmKn-SdNSAvrS-h1TtN2K63TTIargEdWsuJbuAhB2UFAuJI8SSg__",
  project17: "https://media-hosting.imagekit.io/049a00b0a87b4015/original-0521ffb927e909ac58f6b2f1e688c50b.webp?Expires=1841395493&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V6J2Gq3mDVPZTy8VVsGUfW9V8IFQrMCWSolOU3aR8cIs9SFoqRs74Wg2cUMX8QqaxdRxUe0NIXxiiyCjWC2gKbU5SKDpQC6zsKPDG9q6Vm8Txt9Lwi2WKSfxtr3vNVZY9qBY~RMQV7antFh5MW6k5oYnANmF0TClbRpRvPTqdnS-WTp8Hh4~4xpbble8LRSk0PrXiUsJo33O10pbAC16cOaJq8fppygAqOcnMDSCqWdS6243qnpHQkJyZGDsuNdJHbnpOGWlE5AjY9NaqrxaWL5WesZm~JcUoJPVOO98GGbaNrcaa85vRcLY6WgZz7M4chyN1jSl8LwaU4JChske6w__",
  project18: "https://media-hosting.imagekit.io/bb9615e784a9411f/original-fa5f62adaa5e47dd11353d97d8d0b132.webp?Expires=1841395513&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TVmP0PF7~O749Q4C1o7KZfIyuRt4aFd8Hcuf7HKtuW2PKuaZ7xtWCorw8Y2UjLtKSrQh19tD9jtUY-nznQJVJUI41pPf~h9OIi9RSn45SLzksVtG6B5jp966gIScQVc2zEIfcvbkXsMrDs34ECEiZRw~CTRjnZuj-EOfEUHI7HfpU1sDnT3YtWpbp8kryxqroIqnEdd0fXLLOWiSWTDVJvpNiq4Wbky~SOL-xAF3smonF3g1bTED6Coln74FCULATjlfBP-AxpJ-ZgMV36lCrom72AAT8g5IfDzYKOhN~MpidV-6JLfAig4xe0I924wMOzzjsjV09mAAT55WGpGZcw__",
  project19: "https://media-hosting.imagekit.io/e2ef8407802848fb/original-32be5e984093054360bf86a4415ad244.webp?Expires=1841395920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=clFnrwAyGuEMsUG8WWV3lsnCxb6bczAhDZTd6eLktyiWOpbuiZldObwX1e939JbptyBypiJilisVLNCjIxoWO1TfpT3526CdDfZKsnAwIp-uLv-8gHJVf~evIg7eztwSafkrXvGE~1WTdcO7Loaa512192UJ2pzDfwi~VN-19PH0Z4xvbgI3RnyJRPBrvHq-ptpWQ~xz17wkhWy9oD6JO2ly3oMmLYralq-YLKOKb7uO8jS6oE5spAPNwcbmkb1QrtYPSP2x5hxKc5fzQNzuNShhv3PBkUHuN-1tpDpiAlFErfOL6Fn-o1A8FQ8v5dggAWkyGsVyfhaKB~kpUDTijg__",
  project20: "https://media-hosting.imagekit.io/a4c523011d8d4875/WhatsApp%20Image%202025-05-09%20at%2016.22.33_652a0caf.jpg?Expires=1841396062&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zd51pCJ6dp6c7hytwNziVYW2ksXPsJZaoay5kcn5oXc5KuA6Igi6HarspKMWxMIXwaMVHfbqBNxx5rtVu-4meeM2oAvK7ZsJmkZS8J5Cn-HMB3q7lZQaBuqhUqZe6f42HHlghD8LHcoBjYZ1txpk-nP7TW-HRp2afTX3Xhi3e6SZLYVWdnES90QfBukwlNuJyNJ~8d~vGWAtdyQbU5736iAtKcJSWmY-aDIZAXMsqyvq9aKPM~Gt05FoxPYfVKws0Jc3HM8ikD~TzyPHlrqIe7SRTxv9Jy8QsLqOHO-nGGfXCzXuuFao8yO0gJLwchPLwWh5dDnXBkvCNo9-k2DRew__",
  
  // Project 21-40 images (reusing the same images for now, you can replace these with different images)
  project21: "https://media-hosting.imagekit.io/7ab5c2dacaf8465e/WhatsApp%20Image%202025-05-05%20at%2020.27.10_6714b0fd.jpg?Expires=1841392546&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JcNCoopV2q4MexkH97f-r5-kYsMRKPDs4CaR5~B3b1o27Kba-wOVQlo~PD1o4TnM0IZGZBnSvC5wy6kiTtNpRvRIHiRbyDcfVAml-DmyjzLfjoF04W6kcu2CPtL7svYeMjMUpfXpSnGzTHjnq0~wRkZXSIIyhPVXajsTDcWfeGRao3fkKUAiuFiUUbMrbfXR5dAWjWdzSCxjJGYAN9SQW42Z9Jex33MaF1jqjvYXzr30NebFsS5c5KfJUEi6dIhdrOdWX~M02iojNfI-zi8Q6zzYs-bmooFXq1GQSrp3oBcL57raCJwgEUxsibLBirTyT8Oi9DwEsfbx5T1ngylN4Q__",
  project22: "https://media-hosting.imagekit.io/fff3fd4ead144d2b/WhatsApp%20Image%202025-05-05%20at%2020.27.12_77247ef7.jpg?Expires=1841392570&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g2ULY6iCYixB0iATf7oqMwb~PzOItWSe4hBN6KyRcDswG6YU60HFsM0v0UqWf4pEbUJvWE5PyrsgA3qybodcVlTZ7ip~72enAD9MXeDnowOCXUhIW4WPK~7EMmGGjPaALF4HiZ5rmQvXzLq8~zgdWj8IhxNWqUksmcy-PPM28J3Zrt1uwhGCUk2U12ZPDf4QTAKuujb5llp6Ul7u-sF2o2vlN5cqjdBJa8HXpaaKMgqZ5nujxwsof2rxdz34S87vNlhnlOnUpNqwzacQ1CHvhe2COPhDh0Iqd2CCNPlZkI3KAJGKXP58DMdcTDhhU2qzpvc5C9OgmpEbwxol-RQ2Fg__",
  project23: "https://media-hosting.imagekit.io/65b2b5daf2e04f32/WhatsApp%20Image%202025-05-05%20at%2018.17.23_f45317c9.jpg?Expires=1841391996&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q9T4-6~aGsLG-JfEuje5xuQuapInS0GglIo5LNzVP6MwIELWHAv~lCSBCcxz11VhdsVtmPCeES5PVwT9-VC6dyQX2G5EmQivpBnqiHWZ3XS6PJ6ZU9gaUtzwQXIaJNwGIV1~KAr7BbD5LpgzzMDisvWOKEm7CBSKHrPjrWP1tqVd7kO4Hdm8xHZWhhF3I~mwqJarqCCXYe0Kd1X1KB0mS0xiJcg2avLHwDBxhveFMvVquKudRF-nbdXEymkbbMPb3AInbi3zHPWuL1EiEdSylOo3w6nBitxtYsgdyqGQmREzJR-HzQAQEn-Klx4spwT40YkwltUTKwfRIhWTfF4C7w__",
  project24: "https://media-hosting.imagekit.io/2bdb2eaba9314bc1/WhatsApp%20Image%202025-05-05%20at%2017.27.25_f87c9d53.jpg?Expires=1841392043&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kedX~OqfMxOympu74LXcG6GHR~wZuDZpRBcQUuMW~mHhWYhzUI3QbBWkz7A2srj9tbuUjPWtZEryr~kKJIigewxG27q~HoTDCaJrT6ER0ka5n7qlhEYhVQG22yltQUd2t44r1bwIJEJ053pXcatPmnyTY4Tujs4Hjobm3ra1YGMTfZhotiv0W71rAPzomDncK9BQVL7ylyjpnBJUt4qvvWd5hR3cs-uSX46lCPX1lujdrw9--n21Jhu6AGa~JjSvrr8iUeE2idj-Bj2qKR9DhvejtaYmEv0cHRDWd~3YX9V8UfDx47I8uobTycpPKWyOAbB8h4UM5YuJzVxm-0Yicw__",
  project25: "https://media-hosting.imagekit.io/9c8607d8375a4f55/WhatsApp%20Image%202025-05-05%20at%2018.07.19_59df7558.jpg?Expires=1841392257&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FaCXfwayQHEOBsV1N-eyIF2O7UiBJXFeJERSchxE3jltVAulkl~YvLbKPSe7aHScO2-3btVw0ApHv8W3lA90vx7yTXp3Z1YW~5M7yhCzPX93yABL2eCr9d9HqtX5Mor6HUMHfJx4ySLxq2mA8K4neAHLx3Snj9tese1oEGZ96OcwFedNWg22-ZExps885sta8V-cGRUWN7MgKn5EQm1qqQR1whpIEzM2wctKwzNB3ii~qsu1u5tt~r9vBX6W~LLdaqXnTYfxvQTbKfBY1VN6rH6-EnkHJt0YeCy4LTqvMMAO9Ggpazymb3pdsfGaB4NYoCEITHQLqtGkCQLkN3Wy5g__",
  project26: "https://media-hosting.imagekit.io/6fcfb7daec10440b/WhatsApp%20Image%202025-05-05%20at%2020.27.07_d8c5b4ca.jpg?Expires=1841392348&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XmDe~ZEgj0vHtiEzpf-IaKIv0KxzNwySDuTr89hL3pJsg5zSYba4tJt5rd2ANmclOWk-~~jba2~CvAqamt6MiudvBRHtdb6afqKBkR5UXS5WPLiT30r13EknSBzpDaK98McEem6viBMTKUhSbHZgiFbuCkQQF5VA47xHoMLh-GqUY4jozRMnvNduQNOZKERxft~qmZTxT4Ayy5dV1MbrnsFFLKhuCcR6QM1exYUsZvQ9PRsuy4EtJ8PHG7n-0KmF7hk~ju-j0wlszE7yd8d57FBy6NGK2y4E~MKVDTUyaTKxfbnEoZDy3AVWurImU2WEbjbB8Qp1~9meiX5zfHztjA__",
  project27: "https://media-hosting.imagekit.io/2d83437c09034324/WhatsApp%20Image%202025-05-05%20at%2020.27.11_e0d09124.jpg?Expires=1841392733&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=plIHini2PKHWUXWAKvCNW4xX42Qa8GlviaILp7NgsBnKrBxZFTuji2F-OK4eZ5Y5SGavb4Z9RhI4Wi-5v94s19BZ4idcT43OVydhaPikBQkltSTU0prt5rUcpk4FrReCGEHriGD~NCCNwSqWf2pj4HZ8n5B8QV9prx0ThywKcda~AsKMFHeTK~TAjl41MRDbqqbwCE8gqhPiQuEjCYQthbvT6BErzwYhIWuhqIoBbDazIq4qxygNo9OU0T8p~~f5oZLZjAgtKIw0w0VRFQ5V07sHyGel7vgHLiqLeUkSXii3IwJh-E5u5bGIYgd4fn7rzRRIZxyaVadAozRYgXxp3A__",
  project28: "https://media-hosting.imagekit.io/69106931396b4338/WhatsApp%20Image%202025-05-05%20at%2018.22.02_7a48302d.jpg?Expires=1841392764&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mGJv27QjCTb-q9QZwQ6BV1cxS4YBU2GjsOhfbu7lLoLSbupEcA-C-6-e14fhuwIX9ugXB9~NEf6gyU7kKJxhVN1vq9JbsbPfVwwE7cKmEutuPhezarmINyiHmL~Y4VfBWC54o9jJApsVbjKbnAsEdUTk0S63l3IEgq9S~h3wCoXSxHrOsKpd-MoiYRpXYfpJi~BW6Zz6O21If-HA7Mm6pHPZOHXXGjCxg89~0UwRukV9IATolwE0MRLb4uuqQS-vFFbuIw3Ui1mv14Q~u2-AUmAqQQIbManYJGCzr0CgG-J97Mu~sVKz9dw7e3LxSmX44mzw-WvNfg20rTitVeBqMg__",
  project29: "https://media-hosting.imagekit.io/c389708161ed4163/WhatsApp%20Image%202025-05-05%20at%2020.27.07_65aa4078.jpg?Expires=1841393463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qWvGbOqNlSi6JrY1mzbJISBpj3rPZFyfD59UOcRqRj3nKKvH1yjoFDeJpIlws1vLBSaODZjDB9YgaAHBiw8UBzJTh2m-GJHsylnAjxV88UXfNIozTQdOqXLa1eoJnsFks1oSEeJG8FYe5bnF1uCj7J7zwld7YnV~THFgb5T8WwqS9Ovmu9iCr5Wc0lF4xTD7~gmV0CtdjS4ktb2h0tQ6pWBz24y-zkc9zZLO4GP0VLoMzS0Q4qRUpZ6AVulK5KVEK~FdAERfyjGCN22KWg85sG5X-XZ1gJDr2EDXt9cbJaFLmFnmFkjN~xm5CgPd1eYu3o8cmH~llzaHYpZ6vKtwNw__",
  project30: "https://media-hosting.imagekit.io/176737cc179b4376/original-f1e2b34a8a8030e12f2a83625ecac051.webp?Expires=1841397136&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=spPwgUWNhop6qBmFspG1JM3q5smXrz2x8rs2nC-Df6qeMcvAesbwJ6bwXKEiCngZo0rVCsM9DOZgI9ny1uvC~25npF-Zj7jZ7sQyLVl3j2igYjyWP~rWinPTf05K6WV4MgcHoNtq5M9WiRnmC7a0pHKLENZEKvdXf718rbrw6Hk1mwCaMzXLhoIEee505ZccdpQaOQeao6XBF~BSTvvjxvd52rMXEExwSwfH44WOKaica2G0JprBSZO4ZLkXLotM8unV2a9tQgJ4jO7jLJBrZ655Fm1L1Rm7YgC8paUH2QJReYrt61VT2TGrlg6N4TxKjN2M5BpZ5Bn7DJRaRYAWmQ__",
  project31: "https://media-hosting.imagekit.io/2754ebafe0214d06/WhatsApp%20Image%202025-05-05%20at%2020.26.38_218488e8.jpg?Expires=1841394152&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aYTSC1qxjU18UaiRS0rNG8FNxAjwjYSLmoKwCG0pTMi8h0AItCwSeV8yQyqesnKkQWazF36VO57bK~~rTgqCbUw5e4TSREdmGFnfsDC~wKBVPmiHU1oAt7~FnnIjE0FPJoGgNXL9cs34ti16VBwfksb11qh642T-bZLjCzxRqZBwi59MJ8ozqdHMcA1wKBZxe3r8qlDwRbuiiglCKvjzrpNxmnKt3fQ4ZGm0~G~BfCCidILSTXsrMwxs7BI6VZooiFOUj1yONg0-rmDk1eIjStzgJpeZ9JE1NugbCV3YBwHfgqyUmm2y3A4riVNdXGZ7iRd35wJMb7J2OpmTkP9LVg__",
  project32: "https://media-hosting.imagekit.io/97d565499025469f/WhatsApp%20Image%202025-05-05%20at%2020.27.12_f46d2e07.jpg?Expires=1841394178&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IvxciT-Io9peZASBGjREcYUXAhCrB2VTMiUGbUqTCtOMz0dXinSFIG5zXZTElmWEgTtqczQdNJiCbwL6DOmteW6ZAyFxB1kvofseAJ-wPbgvC~gr3LSjXIa8onML5klhhkqGgHGd7w~2LyGysCH3uWSsT4bisMwRxJCxX3E5EyPbmrkq9cMaICdujswyKqO9EcT3is-fQ14LsrPnXjC5Oct0TaiXrj-CZRA9ZDu1Z0Dk8k-YeoFRsXQRIU27k5IyLGbH6~mzqJ4UxMlwzCqoV0Z1Szt15Uw9y~PN-31fwWeqFCXzddVnx4c3IKuArAYyLKHQ04PP54oRRkNnhDZuOQ__",
  project33: "https://media-hosting.imagekit.io/76f13343a8874ae5/WhatsApp%20Image%202025-05-05%20at%2020.27.09_2ef24b7d.jpg?Expires=1841394626&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lwAhwjKJ71FtVefNt4uj5s75op7eMdpelo-yZc~tUa3JEdJjFt5B4h3Sec6vxfWODtuW5qhd0dUYq5dN3D~sf3qCm3SzZJMFnDHJjsdXx11k-TrrGUCxauyV5TER4rOJEwRALRfkHfyuBRXi8sGqXElj0I5-i5N1pjEo6PGysKgTKXCw6y~CoowSb~9Ra5OJOJUQ-biwrJMukAdTT5fHERYGDkjbkMFUYKF90oTxz1KQvVMwLOl~XnxcYAXRjPU8haqlnH8hsBjlSHVx3J28gyJHcNLFbBoxSamMEZsCzA6gYmaFZ~f4l6zr102D5X55rrtPe2FRemA2LRKGCjMuHQ__",
  project34: "https://media-hosting.imagekit.io/c0843e9ded804015/WhatsApp%20Image%202025-05-05%20at%2020.27.11_29a4fa4c.jpg?Expires=1841394653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=3R~ZS0CoHGBHKfhTYKhpJNi5yJXsPSppFGO75cHPYLxyGGZdUOHlzxxu72VaOgJjnqXNa~dyNFE0BvSBod2QJGI55VhHBHNa7STAWyYBmCt6Cv0oWMmBR0mdkBl27XOOOWAqxMZRSeTL-YfQ3U~qRIqRHdPY0hQuh-u1h-jk98mwQkxyB4ZplBz23RcL3giuX0twcViQSC7nF6z4h9gY6rjClcZgBbDV3b6WkXyKrLC5wPRtG3psNVeJg3raphn3l3K~wYN1VHQR~ggwq4VTqjTCalbwVjVwK405MzsFRo1HRwFlzhe5bpt2qlISrzaRWfPIcuRsRBTRNOOQMNvIZQ__",
  project35: "https://media-hosting.imagekit.io/e2f9de24290b498a/WhatsApp%20Image%202025-05-05%20at%2018.31.55_3d5e0f55.jpg?Expires=1841394946&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZSssoub6TJQLf8-K9SkyBRDRSDNkkmuNPCZT4dpK1VVcwvx5i1wQhaz5owBBSC4TFkZucNxqmNFB4mFAqZEny9kMapWp~241jsJUe2Tp5tKF-Iu5nB-Q76NEUV3SMTtRV9SRhSisXt8nY3i0WTNtOiN6QWnehkHgrnpHFPWKUHfqyx7zMBOjNTNonZL4FgVHrnhY4ZAeCgzTpMvqZAvSJHJ910aVj7~aGWIsowBqnU79QYKPEZZIURTnDxYZ46osIBCro1WVb1~qrhls~IOvlLGHSpD3SxAm3880Qw3LMEuYfOeNg~a7Ac9kOVGgQq7hmuXxDZ8EYr2t~XfBuB1u-w__",
  project36: "https://media-hosting.imagekit.io/ad3b8c84693747fb/original-f1e2b34a8a8030e12f2a83625ecac051.webp?Expires=1841397219&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AwkTYhmwQGMGmRynC7-ZKqQpISH10ktvrFXlxVIBizLK0mXaU1wlrLrZoh3QfWP5Hg5SWzwv8kx1Ad2jh9GjxGxwRcOFwy9VymILifzcYvXnjBAg2m7ALBEopGd3o0-Y-i7PEYcOYXfuVsuTC2a-cMfqUz2XscaR7YSVOZV4-3YGMhyEw2bbxCVCgSabQE8sCV9kAz96W9DNZgNpvXITay1HkqYxOSAPQqA94gW~Mh5R~rpfpv7J-df7l9Z9JGyVn16ckeqb4HkgtHwt8-4bU1DvSV6iwMLdI0zSaZ0eCLpEAFgYBDUnhcmN3~ZXcuS3v8jlQjGY9YaV86Cbgepedw__",
  project37: "https://media-hosting.imagekit.io/67fb377a0d5e4b59/WhatsApp%20Image%202025-05-05%20at%2020.27.09_2775ac77.jpg?Expires=1841395447&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XAjxhZAGYIfpT7sW1AAFwZj4D4lGVpMVD8uutRTO5HkilFEWLhR8-RvoVOdX4H~v5Q4sjcK9GNZTpB-oUron3oslWo32i-CBaRauBt1mt6VGfIEXcu5N0jMmwSI7WUTrKbypAPFsAWIGmxyPkaJOTBhtD7u3fsAZqs31yysfQQRtD57KuFi8bJNAGFIYaQ6mwWuslexd4xbiFCZcIQI3f5-pESrN~SJroDXmuksmXGZ7WfnMCcs9n1MWr9XTBW2jQI0M1OigpR8x01d4ouYnm3RdhHYNCKoPJZO42b7Kv1IILwCZqos3-ADeE4KqCSO0bPdmdht5EwtLKVZpcbQW0A__",
  project38: "https://media-hosting.imagekit.io/ec0cb6c707a2424f/original-cd739778d99a850a4ded174d188bdbb5.webp?Expires=1841395471&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jFj9YrBK38WZR3pHkl192sYriDoqeiisiLPV~G8Fwkn1HSrLsDQdGJn8BHxnq53yrL1yRMdaotTmDsJbUa7SiLiFEKdAnU0gjtIraj1RIuS7YL3z~0XsSyUbytADjetV0oao~P30-rhpajjB-tQg9AIcl6B6CGRMK4K3yIymnUIAfCtIwf-WkAvVMjm3iaUU0mggD9EcreVioFf-1829ZgEzKmXm5R5qokzpJbH4mUj9qKVmINaeWJIPVfsj-2PoW7qZG6Jlco7bnkVNCjO1T7sufDRqDHBi9F2HDJc21yHSpq4kXlMVINQND7TnDTjU4BCihx9faIkQ4YGp~WKoHA__",
  project39: "https://media-hosting.imagekit.io/11c927eed8384c8f/original-d0050409c3a61b4125176ec94fc1b5d6.webp?Expires=1841395880&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RrkL~xZXbp127oKBe0rb9S6omO~81~Wp9nEqCzlel8iahPJmqscF6VLgvVgotaz46pa3MDv3~~CvKQiDnQ6Vafks6HwfBN5NvNR-o1wKMk~fjbwZEtjB0RSGPNQQRqxoJsjKb9oQF7b0ygRnh8j1Jm6bsy2G3wTgmMh222YmbUsi4rJA1Ap-vtActMX6bRwR4NFKhywwQmabe6KkWoGvA4RSkBpuNQKmhOgmCVtaDefo6o1rFvxeuJ3o4jSFXzF~jtEwGMHD2~y1b5muH3h-D9te1GtLC5DHG~DVLZGfm2cSlR7yY2Kl8Gw941z-A35ZsVpHUT4d2SkOaLJzacrgLw__",
  project40: "https://media-hosting.imagekit.io/11c927eed8384c8f/original-d0050409c3a61b4125176ec94fc1b5d6.webp?Expires=1841395880&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RrkL~xZXbp127oKBe0rb9S6omO~81~Wp9nEqCzlel8iahPJmqscF6VLgvVgotaz46pa3MDv3~~CvKQiDnQ6Vafks6HwfBN5NvNR-o1wKMk~fjbwZEtjB0RSGPNQQRqxoJsjKb9oQF7b0ygRnh8j1Jm6bsy2G3wTgmMh222YmbUsi4rJA1Ap-vtActMX6bRwR4NFKhywwQmabe6KkWoGvA4RSkBpuNQKmhOgmCVtaDefo6o1rFvxeuJ3o4jSFXzF~jtEwGMHD2~y1b5muH3h-D9te1GtLC5DHG~DVLZGfm2cSlR7yY2Kl8Gw941z-A35ZsVpHUT4d2SkOaLJzacrgLw__",
};

// Project name configuration - ALL 40 PROJECTS
const projectNames = {
  // Project 1-20 names
  project1: "Juicy Chemistry",
  project2: "Uber",
  project3: "Crm 1",
  project4: "Crm 2",
  project5: "Zomato",
  project6: "PhonePe",
  project7: "Swiggy",
  project8: "Google Pay",
  project9: "Myntra",
  project10: "Paytm",
  project11: "Flipkart",
  project12: "Swiggy App",
  project13: "Amazon",
  project14: "Zomato App",
  project15: "Nykaa",
  project16: "Myntra App",
  project17: "Ajio",
  project18: "Amazon App",
  project19: "Tata CLiQ",
  project20: "Flipkart App",
  
  // Project 21-40 names
  project21: "app 1",
  project22: "app 2",
  project23: "crm app 1",
  project24: "crm app 2",
  project25: "food 1",
  project26: "food 2",
  project27: "Grofers",
  project28: "Lenskart",
  project29: "Pepperfry",
  project30: "MakeMyTrip",
  project31: "Snapdeal",
  project32: "BookMyShow",
  project33: "FirstCry",
  project34: "Groww",
  project35: "Urban Company",
  project36: "Zerodha",
  project37: "1mg",
  project38: "Cult.fit",
  project39: "Cleartrip",
  project40: "Unacademy",
};

// Function to get the appropriate image for a project based on position in the filtered list
const getProjectImage = (project, index) => {
  // Use the project ID to get the corresponding image from the configuration
  const projectKey = `project${project.id}`;
  return projectImages[projectKey] || project.imageUrl;
};

// Function to get the project name based on position in the filtered list
const getProjectName = (project, index) => {
  // Use the project ID to get the corresponding name from the configuration
  const projectKey = `project${project.id}`;
  return projectNames[projectKey] || project.title;
};

const OurWork = () => {
  // Use only Website and Mobile App categories for filtering
  const categories = [
    "Website",
    "Mobile App"
  ];

  // Add state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  // Current timestamp for cache busting
  const timestamp = Date.now();
  
  // Filter projects based on selected category
  let filteredProjects = projects.filter(project => {
    if (selectedCategory === "All Work") return true;
    return project.type === selectedCategory;
  });
  
  // When "All Work" is selected, alternate between Website and Mobile App projects
  if (selectedCategory === "All Work") {
    // Create separate arrays for website and mobile app projects
    const websiteProjects = projects.filter(project => project.type === "Website");
    const mobileAppProjects = projects.filter(project => project.type === "Mobile App");
    
    // Sort each array by ID to ensure consistent order
    websiteProjects.sort((a, b) => a.id - b.id);
    mobileAppProjects.sort((a, b) => a.id - b.id);
    
    // Create a new array with alternating projects
    const alternatingProjects = [];
    const maxLength = Math.max(websiteProjects.length, mobileAppProjects.length);
    
    for (let i = 0; i < maxLength; i++) {
      // Add a website project if available
      if (i < websiteProjects.length) {
        alternatingProjects.push(websiteProjects[i]);
      }
      
      // Add a mobile app project if available
      if (i < mobileAppProjects.length) {
        alternatingProjects.push(mobileAppProjects[i]);
      }
    }
    
    // Use the alternating projects array
    filteredProjects = alternatingProjects;
    
    // Log the number of projects for debugging
    console.log(`Showing ${filteredProjects.length} projects in total (alternating Website and Mobile App)`);
  }

  return (
    <Layout>
      <div className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Our Work</h1>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Explore our portfolio of mobile apps and websites across various industries and categories.
            </p>
          </div>
          
          {/* Categories Filter */}
          <div className="flex justify-center mb-12 gap-4 flex-wrap">
            <Button 
              variant={selectedCategory === "All Work" ? "default" : "outline"} 
              className="rounded-full"
              onClick={() => setSelectedCategory("All Work")}
            >
              All Work
            </Button>
            {categories.map(category => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="rounded-full whitespace-nowrap"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
         
          
          {/* Project Grid - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  {/* Image with 3:2 aspect ratio */}
                  <div className="w-full">
                    <div className="aspect-[3/2] w-full overflow-hidden bg-gray-200">
                      <img 
                        src={getProjectImage(project, index)}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback for image loading errors
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1579621970795-87facc2f976d';
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="bg-purple-50 text-purple-800 hover:bg-purple-100 border-purple-200">
                        {project.type === "Mobile App" ? "Mobile App" : "Website"}
                      </Badge>
                       
                    </div>
                    <h3 className="font-medium text-zinc-900">{getProjectName(project, index)}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-zinc-600">No projects found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory("All Work")}
              >
                View all projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OurWork;
