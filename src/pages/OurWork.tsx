import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const OurWork = () => {
  // 10 categories as specified
  const categories = [
    "Website",
    "Mobile App", 
  ];


  // Add state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  // Current timestamp for cache busting
  const timestamp = Date.now();
  
  // Collection of 40 different image URLs
  const imageUrls = [
    // E-Commerce
    "https://media-hosting.imagekit.io/8182e50368f84796/WhatsApp%20Image%202025-05-05%20at%2017.15.02_4803d08d.jpg?Expires=1841053606&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ohAWfIcJR518DR-XT~hCNLUDGatag16BwPwXlF8A4OPmMyAzyRJJm4fcRueRLd1BT1Vd-hwEp8Mtq8NzwsTAru1BM-35VHZLu2p9Vf-UcocmErHWY8bkmv3GzLXJk283ELVSwVtIa5K46FtiYktRqMG4Ql0pd8rZDT~Ni32T8X3~jXjumYnzJibPTKRkd0o7TeROMqNZPoosvMJ5Ia5CJdZFHxjU6KLp3rhXGWB8zVO8e5X9rMUzLOy1FjAcNlbze2EXlL36wxHN8Gx1iQly0UOgsd~N1NocfKjdIbx2t8cO4sRNcN6QDUH4M-Q5q1ZwNErbs223ehk652fXT614aA__", // Mobile app 1
    "https://media-hosting.imagekit.io/31faf635e4c74bf1/WhatsApp%20Image%202025-05-05%20at%2017.15.02_1ae5747d.jpg?Expires=1841053733&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oUoM4K2F4ewXfmsPCOpXSo6qAD~WsOFju4YIGMsCB6bwrXojeJxs1pM1AF93~l3QLfRp-pq01TRqmMaaB6aiTS8z1FfIrmyi9MrVSdgVRbTd2yghr3TClWMXET308l71bB~kwawBZkArXbLgeih-o13bEjZ0j2RsvJv8KgTsDYKWolRqe3~KNgHgoZw3d4r1PXqhUoQdAtREY8MmrXJK4sXSLQK5a1NSFQgAlT2wD2cQ5uSkNZCJGIAt05S3oJASSePWVN~lWLvZQwNwbooW8pqSzW8Uehuyx4VogMNDSjuNZ5iMWDBvtU1rcbQP30Aeynt9FkzDwNixR4GvlsKiYQ__", // Mobile app 2
    "https://media-hosting.imagekit.io/32d50ffc149c4212/WhatsApp%20Image%202025-05-05%20at%2017.15.02_3bb14c20.jpg?Expires=1841053795&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QRddAjZhNYkYsqe7Is4cgdMU4M4~Ph~m~DWzCT8pXqBLHf4Ll58L~6ebuePh6zvIbkDA0H9zyCc1rrGCfWkbLyUniRQgaTYmxd1DJE~07L~qPQBJ4dOFudla5sM6BkUd0Pss6S3tTa4dJOYQEry9u5jNkOTkdAtQDzepUBk5L5aJkYGVus6ObTVNgcG4gezXZX0nZFlLHd~wsARjs8adwtuq90yBGWlMoLI2DFhVWCYUJM3G75FnohNP79SsDKX-Tfm7QqP09g0cTLW5j3FqfVDNpm8PoaGGpCeHy0wY8fAQrpVLKpzuJ4Z808YXytKnUfnwu9Jcc0Zoe4YAYuD8IA__", // Mobile app 3
    "https://media-hosting.imagekit.io/964f24a102a54989/WhatsApp%20Image%202025-05-05%20at%2017.15.05_c644755d.jpg?Expires=1841053856&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sua5XvamKAZyPPd2Y6NudSTQeUukOn6rSm-ZFe4LRO~3tPyvVu4c5SAkJPLDj4gI~Mf6ZOVDSZaetBODLQseyskHlLQEcf9TtAeCNbRv4G4k1yX95ihXfB9rBh2XzFw5OiGWqhuLObx~UJqK0SO2Q-CD4aRy-aRsQWuo4Z5WOaWodXOKn8vFvK2PjnexSESin~PZXJnDJVkym~2SlPNTgkk4QTp5KunRQf3Ze3aA8v2qm0KX0VBiSBOxkid6vNG~TPlPQYZDN2LqiNN9Su9Z022QeMBu3I3OB7P2DRQO~Ys9SMz5LUNamqU90UrNR3Xompg9st2ZJD~ZPh116XYcAQ__", // Mobile app 4
    
    // CRM 
    "https://media-hosting.imagekit.io/e1adb132f174409c/WhatsApp%20Image%202025-05-05%20at%2017.27.22_3a4645bd.jpg?Expires=1841054274&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M6LU3yF7uyhrjBhZYzqo8WzuEmiPTlvY9XC3tUdL7sGjDbbcYGR4p5CNs4N1UO-wWs9kG2IIeygKyl~4ZePt1ZX4DrM5r0cqUw6SkqCsJYpJlJZ6fbkU2HZ~eIIjZrJAIxagsNlg-QvMUj31afx1z8BhUUdTFoMxagQ-EZKsx0BZm9Ud20xEWh3TivlkdHhfUzIZyqx9wuwUPV1SKFyPzcWYIRf1Nl9R-Di-RnHa-Cd4WgwawFl3N2DeIQfsfjp0qJ-jzo60kkOE5u-sqBbXYL2FhUtTJI9jIFLdxFl2MWTS2XdGhp0fncmbrKBZfRSkGi7JRn6DoiwEMA9zx6m1kw__", // Corporate 1
    "https://media-hosting.imagekit.io/942627dc3a9a4ac9/WhatsApp%20Image%202025-05-05%20at%2020.27.04_e45d455b.jpg?Expires=1841223378&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UoDO1Z1KqQ~KmYXRl6UjZqk~QXrQckIS6Jka6tOVjZkXb0biBqSU3YJxjL~poBGIrKaH30spyRYWMJwIf2efygSOvZmDP9lZejeLiuZNreI5BBs~Rfo1oAbOb9FxbEfuGDFUdZJu5ft4lu2wdHZvkqiMtCnlKjyjXQgBJJA97Q2Owryzx-mukaYbkWeiFy1m3uZjSUvbFbBj3LUr8hohmd~HrYL6lpkU~UpM5-n1CL5C2HtHQ1g0ohlOW2UZNcnIzKFWlhFgPs2rTEw7g~yLqEXvLTatP6uRBTTOOf3JDtUleZ9IaXwI~v1SQVin5uqagFAFK1ilRSwpYw7BowyVjg__", // Corporate 2
    "https://media-hosting.imagekit.io/d33b2576b46c4fe0/WhatsApp%20Image%202025-05-05%20at%2017.27.23_f0fb89ab.jpg?Expires=1841054385&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZnOWZmZAJ3Z-biEuxzBy7YtbkpnwUC3kK51XARORcQ1bs-q0mj3axiWRwGmn6x7csB6k~Xdu2vWv2v~1iKxXK4W~bBb1JTDBZ1VaXS3rkHv8Dfx6xC8aat4s3~B-G2-F1qhWfs3L-Au5tvX5vbjU7gqBlGOaavJCVKwr~47fnTX9RXqvcIfxISw1wrrCAO-zkkFXPq12frZ8bo73uuYy7HCwMXkgxF0BtVqPOveJm3zQYoFhHBGifrLMK2Hoo1WXOhI8~2KpkJbEDvRFcfs2PYD6c8P6MOHz4k85epyt~SSf-EVqquXRIZTuTj2k7NP5lEgSYTv71VKDNuNomO4JtA__", // Corporate 3
    "https://media-hosting.imagekit.io/fe31d2bbeb7249fa/WhatsApp%20Image%202025-05-05%20at%2020.27.08_3162a3c5.jpg?Expires=1841223576&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r611GPiZ3PxyDZK5AVlWPuD1ZU52B0rwJucJoHuCLbzGr6PjkKjuPAHNNIknxZvQ1l8ema-0-wav4EUVjFIn7PFU~LlGfDsC33EZIfkEgUnEjcGWrFxp5yPo7h-h3EfYLwg~HqIJDojlbrt2EdoAUYw~MrcwtKzPqTvOb36IJFeMQm0u9svz2OL-uff4QlLH60mmZG125XpFFS7UsIuiFd7uf5rEHLJg5alzLaC23bD8Lvpu6dbz27LVqCZY6aUkVC15qlyEW-jcNEVeuYGQgROBcNB7Wls-mt0bE4xRQxgbRIV0FYV7iFmSWtCuwC3SbbLiGenJhsJh9yRZGeIKYA__", // Corporate 4
   
    // Healthcare
    "https://media-hosting.imagekit.io/49e933e5d78f4c0b/WhatsApp%20Image%202025-05-05%20at%2017.37.08_4b8320c0.jpg?Expires=1841054978&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kJc6LQ5d0aKsiAfq8ZLoxxOl~ewP6lOqWPYH3F1cnQEnru1moWR3hBNGEnbMPc8jXvI9X~krjukAQf62RrtN1fY3U5VMsb17EmvDJ4PEK71yDtJz6ZAbawtgnzXTMSXKRdKbAIjlMmOedkm93jkEqPLKC2q6-yd4aAvlS2AayMZE2zx5yZhiiwBU54m7Ci3sq88pXQKddC0un1iv3VheXAf2gLNyYZHK1CuyvbouLpOtT-RYEo1K3DufyZSr-Nd6wk4IeLhyRySwWrgt4nurswJUJpXVV72bo5m8H0O-ICpFOawQrmXVDOSPpkoiSOpxSqewbMfZOJOp4oYzhAKLXg__", // Healthcare 1
    "https://media-hosting.imagekit.io/56b3b334f76748a9/WhatsApp%20Image%202025-05-05%20at%2017.37.08_54c80f6c.jpg?Expires=1841055028&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=exvm5XbnPewrML6u3SSVKe49YKHcgfr4HuTn7opReWNJfxlD3YXVMi8VRY7oSlJgnRZyAgbwce9gMd4FwU-gBlsJ6lfqAMteC5JFKqSwlwWG-cqhh7MkgpMiFtPVanaOFy1gIBSDlT7LWK41CS7XQ~b1zRcMftxxyklz5UBLghz2PJm4X0l33KldQXQMh20~iaDa4-zZM0r8nUfM3q9AYTd6onQHamoq6-lXP4T~hcx8oii4-Lzi3~J6pRe8JHIQi4lzZHFJdWXz6j3tdw1SPWX67Pb9IIHeSvK~voZMqx-~kBQxZjCCjaUsWEfRFT~P80LTlU9BVRuTSDK~9R~BRw__", // Healthcare 2
    "https://media-hosting.imagekit.io/20e29cbdac5a478f/WhatsApp%20Image%202025-05-05%20at%2020.27.05_f00e979e.jpg?Expires=1841065700&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=n8J1hlgcqwGBFqc8nrqUvl1bbWlw-0SR~f5BcR0oBRhmyygTw3NWvfuA2M~YheocODwRTtZwe-jpxreQ2j9wY4HHkD4ySu6OQ40NYWE8seO7OtYUGohqKXIa1ZEooI2ieLcya0MTZaAxXf1~~K4wKwEG-kgafy0jVYfHQKtepRFjC9JjaXudwTY7KpkWtE3NzBTPHqPfTtP2eW~JRfyo~SXKswQtVwTgDs81jEjB1svEDy0zQeKYF0WIA~Cvjb7~-Pa5ILmC7wl4FBKAZPruLNTzyPWDITMoHuTFPvLXsod0FjR0O408DwUAGgQ~URJewQSN0ATbrizJuB8xm26APA__", // Healthcare 3
    "https://media-hosting.imagekit.io/e2d48f456e9e4dac/WhatsApp%20Image%202025-05-05%20at%2017.37.15_1768e148.jpg?Expires=1841056607&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NpSGNawE0~MQ65Uhymn618iPus105PDNFgJx~ehwPP8BnpnqYYrbzlHAJzBF5AVZiGeBvhDm9Lr~vZBI2qBSJDnwe91zlZbM6TqTKgO2-RDQQ2o9TMqrnw1JkJ68sSiV-BB6SD2Hxc1Ffiw1HZxOL9C4-~XSM7NyhMi-3ryqjx2Bxyuv5PJ4kJw0nUlpsXqLlDFLn6E6bYeAwWE54kC66DhuoOHpLhzKQna5NxNk2hcMVNYx4~2edqdEAjYUPheg~3rDhE244~eARa1VolNlJ0ltQeqZz9~Hojad55kV~hJQb9cuCrxPX7JBBp6LhEZAB0o9peaiOeKCLknPriS9fA__", // Healthcare 4
    
    // Educational
    "https://media-hosting.imagekit.io/1d396a25b11e4984/WhatsApp%20Image%202025-05-05%20at%2020.26.36_48c9054b.jpg?Expires=1841066065&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RJjjEPUA4~wy8fg0ECsNDuijNY0LBnDQr5ZseVvIrzicE0ExCMrTv8cPcgv94juuz7zKNtx33Sld4WyPNpDbosAKmGlzxV2OptmIuDdiv8olY9DrXmz8EB7~7-zYShykHueeeiIZd~svozDj39i2VUv8v9AjgMU1m4w6DjoJhfw5ls-BMjfMSxWMRoH5oTECQFKCERpakzoH5unDI2XNvbrln0Ain7Ak~WhJ26HhJyG32jV1CqCwaIirsALfxkvgvMd~A11tBiIVw6fZsaVZsctGlSAxvFjx3wLOVvw3cKDci-s~tQy91IYG6kZzLsdWO31MmPq2WQBA19JIgw4Ckw__", // Educational 1
    "https://media-hosting.imagekit.io/2d72900b96a5410d/WhatsApp%20Image%202025-05-05%20at%2017.29.51_2d914035.jpg?Expires=1841054712&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M10rbAZqSPx3N790caNbnRXhlpoeNkvJ4U-XtwOGtUHSKRnhQ3pjkbHLq5j4BfFMdfR2~IcJbgEsqvRKuXLL3IZZoch-OmHTItecfiyuLg76PwNEZo~ofbTeQGC-DvACTpEXn12ZVhlGLg8RZ3Fe5PzbUrw~K0uYqFdcZtAjjNbcPKwVbR20F39Aig9u6xNLAulfR9V0~AZ2hHdsf1fGuIa9MVi1IWlfIrJycltKyJlPT2Rkz5PMegQN-Xj3LvKGXxtMHaVJvRf-aObDXed944Uakb5SnYoH~1o3iGekaSkPVi3uuKvl8J4m6aNjfoRkk-MQQFlzZUGlCeRVFsskZA__", // Educational 2
    "https://media-hosting.imagekit.io/f685e0cd160a4064/WhatsApp%20Image%202025-05-05%20at%2017.29.54_cd957daf.jpg?Expires=1841054775&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xrDkvI4b8x0pFOdBdaNNQYTJ9i5fawNMP4I0UDaPt8oVya4DdkDsk6xEGGC3TBXXDnhq-mx0xyW8ewrg5DzfJFNbeVDDPznMGC4F24Oq4-oDVU4C-doiUml5PwAQDf0XxosfRQ7ixllXMZuWXiIDfwv3lSvZ~RXhEBFJYkm5mCaaNoLIXbUzRUObtVdhqxjnEPlSqjRMpERiDE4AtG0dbt~tCAH1LRY0rGnzdiMS2JXS02SwovM1UFjrZIpYfg1zot2wQsql6MuBt97Qg0EAu8MY9cKMYVrPzRT~aQV4PG6SXitvFKH66oZUvAJcEldNfUA-o75~~QIvTDX7i1Ybog__", // Educational 3
    "https://media-hosting.imagekit.io/9158e1b950464c74/WhatsApp%20Image%202025-05-05%20at%2017.29.54_21fd7ddd.jpg?Expires=1841054844&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jkU~wcVoo~2I~zuE5gKGlfz4410K2JBvdWQUTxC~m2j~0HF3bWyxsdJckT8ZG9WTQCDwEUHsvh68L90qXmQADCt6Jd5f28nwcrCMolh9OTZG1wDo2FJ9pjflSaKHQeMxe8mcWPsjpvfhtdnI~nBnXUT4plpcmTJEqeZVkwu5nvTlkBosX6XNBUpqbPleg1jZLb7KxGufJq7TSuGGhs8fFHug~4zZzn7T6xnJ8W9qWSPgl2bsPvJdAnbN8qeBYZqT31PFrk-P~zwRvIual5XhhRN1rux6bjTz459nqvh2lG7C3aCNsQrucLCZz96vJcpy8Iuk4Y48yp85PpJaAqVqhA__", // Educational 4
    
    // Food & Delivery
    "https://media-hosting.imagekit.io/04d88a578f63459b/WhatsApp%20Image%202025-05-05%20at%2018.07.17_32a7341a.jpg?Expires=1841056678&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PTemdrXhXsr94kmc3XN~wI1AV4hknILhe-MDuEdXfzMnHHWY547nkUg~HkHqmZjB9fzqIWTi5yWqojvzey85wIR4A9XxwZ2PTy4IQWWxTOUbOfivuev-B~Ypjo-b-cCj5xape6n6oeQ7vW07FTsqTC2sNMoii7eTKnXQyl95Ev5wUoF-uK1H3WpajH7r1c0hVN3sX6ul3VL14obsScltxpqp66eCtB4hpnJdSLfir40nCqNN-OlXVrpNFn3u5VGccUDT3hJ8QWO9XOpx5pO7~-0-yMqmCjEgNJHvqGDB8j0pNk6syJeP97ASrhPjsEmviMo2bKG6LCjsaNK3maYuHA__", // Food 1
    "https://media-hosting.imagekit.io/2ec196c54e3b45d7/WhatsApp%20Image%202025-05-05%20at%2020.27.05_0cf34705.jpg?Expires=1841066318&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uwyBitT6HcMk~K1OnjeoA62EgJyL2rTzq2waOmX1bqCSTXUnOT8uKVK9seCQiouxyRbAl4-7jkS0dGLQTwixQxw-Q8QFFghNZIJNkFTliSL1Yy1nXMax8tSiBC2vcsThYdC6szKjgMQfpyq5nW8eL5qIPT-KjD3kbC8C117dDpIqND-17qnw-VUwIYp7Kutu9Pr8askBAJqRb1d~Aax39pQ5GarplztBQckqa2aEdAHuFktC9Xos8-M06OKoToDeqr~-F-kFQaty6skts5bAjmV4fdAwYbmMJvN1zWjBThdZf96rg~a1yrw0YUdCFSGuijVNSaz6aR8gR7Ae~UUaLg__", // Food 2
    "https://media-hosting.imagekit.io/54d17a3bdea148bf/WhatsApp%20Image%202025-05-05%20at%2018.07.30_e283a3ae.jpg?Expires=1841056781&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WyzS--O6ijdkg6B8KDBNpQEtpAeFiOu-XPWPGyk772wQti4XWkLFVRujaDte9Pq7xU5ltstqFn951gELWP7W7Jg6yOll3RiQJqK6xEYO3z71PrWRjjcuRzq8b9AewWBaFOmq1X9B0eQ4BW-XgPoSqy~-JqPnolIQ148XbqxQbwkTAq~5OyJer2bpt32vOKJH8-Xm1TkDBtfN~pZUTKKfawKmF4UOwi2L8t8s6HBXCa3AIWtg7B2ePLpksOd3GWsVXJVSmj3XNClWEISp5UED5sWp3cKh-s1jCldUk5is-mMxBXY9ocwgrw2oILXD9cnkplv50yo4C2Sl8BNRPOYbLw__", // Food 3
    "https://media-hosting.imagekit.io/0226990f74974b4c/WhatsApp%20Image%202025-05-05%20at%2018.07.30_c6d17e2d.jpg?Expires=1841056833&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qkKKeALsUlFDrOf4RflHU2UhnvV6oCGHqXqOqgKRnJigwxmzvlaroq-QGg0TEUhW~~K~MM41xo6WEdtxDKXE2r0UDzIxlFbFShZnJwWn2kQ6x0ELMfPHbgHtuodZeZmrfu8zXCvosTronoh3jXvJ6UwjEGkWfUCa07Eh8U5~SzvOFVM~XI0bdvGznZSkv4QDAeFf7AfcdQ2WStt829-F~8pzSNqZLMCl1EvoFMo3WZTSZ9nOqK8PTd0~Oxo8ZJE8PncMaoJiVnqWOE9jRFgBViFMhImH8Xrj9lcMjrgUC3mMctDeT96Ew1geVLQ8cnkKtJMtmV88BljW4jnh0vcoHg__", // Food 4
   
    // Finance
    "https://media-hosting.imagekit.io/c0c35bcf4d1e49cc/WhatsApp%20Image%202025-05-05%20at%2018.17.23_1be2588f.jpg?Expires=1841057456&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qZvzCuS1vSmfF59yo7I0n~qc4r2Gj4BmFLr8-f8KR~~sKnJlhnh5W5Y0Skvfj7OzQMQ91a3R3gBQa-Ke2cDP8MZRiVPXWIS11AbtcN0M6g-W1niFbZjSvB4vb2mMoYFrTzlPe05MF0C5dKcScomJ2LCTq3TBujRkE24PzuLxLTQqTzHqe88eQYeQms41D~FoBfsIqD44Y0Uj8C5cTznkVHKjkdstwMdAk03rii~ANBCQRuwNNSgrdO-8FcruzuuHPPnDuuTvteSxLHmGgM7azjlxXbPzj47dE54EHtZvNAfPB1UAtXEFYsRmP~6JKVOKPfcTTeWMOvyXEiusztQaxQ__", // Finance 1
    "https://media-hosting.imagekit.io/e63aa66be2214665/WhatsApp%20Image%202025-05-05%20at%2018.17.21_0e8486b9.jpg?Expires=1841057267&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OHn6yGvDKNisyfWaxgyG26gbrHWpBaUYBhvKfmOP~akyhyrZVPZ4AtHkkuVzIPfrbqqvIUBMSUEyhLiL12KxDwcekQjj8CQMGa6q6UQyvyjWTzWt0ZaZmw69t1~leTLGfOGCZEW7Yz8UNxpbTLNsuzvMX7mt1lw6AD4XX8rGtc~SS9ewUudQQccHAWrBRMlDIZeg6uC8qtIpBUxB6Kqxis-4NvMQicTbtmHwmQ1RBigXGQRdQ8bq4W-28pC9JqmlAhiPuS6aVcFOuj2QhZO58ejcMA-nLZk0xbLU-f~uUqzYvcj0P3v13fpfqhWKuOwiqvIjhnICuG1BLMLAt8RPSw__", // Finance 2
    "https://media-hosting.imagekit.io/244b5a10651b4d5b/WhatsApp%20Image%202025-05-05%20at%2018.17.21_ff74c935.jpg?Expires=1841057349&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eEpuD4au73L3djDBE6cL7EZ5GI6dTjiu2V7SJLnIqtx3pLdbaaolfBa1i0Pryo~8oXNf~uDYr9mWitxpXjidmw012yblUIDX~CYE9AKSl9zb~3PheZQ4VTiEGXSj9K72F92TCcimRO9s4XzO2gtbpp12WNBUvrj085XKK7P1Rj~adYst7JS6TUOoGTO~xIFjkfS~ln2UvZruA81PacOW749xUwa-lU7aUePUQsd~zsxw4S4zav5wRK4SIJVl1HuncjjaWCKJHotvB8~Jopr0ip0TV5evx2Rq1EQ4nkyhgKfDySbb~D40I1kDtDzRTYbsol89KOU3Ys--u3l-xW-dhg__", // Finance 3
    "https://media-hosting.imagekit.io/95469271467c4dfe/WhatsApp%20Image%202025-05-05%20at%2018.17.21_f25592d0.jpg?Expires=1841057412&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a2kOFCXvfuBbPLd2N~cnf2ft3MKCxH8qD0ab~L6SISSSDhXPmGX~Xmsvppbv7xY2wa6wKnwpc9nwWfXifA3b8at82wud~5pmIj3XrVfxRsn3w-1ii90beHJ7n~9HjI9oQMvR34RFdSGw8wWF8JXFJZIpeFz4bXAWg4TdNR4JpNUMjTWMEgA7aGmpAhEjzzVEx2Pm5PgNxRazIRuC-UV-fDKpoXnUmQfTtGYKlkJM0PkdkGSWPJqMEu1l6sRd1GP3~gsmwOgtR68NT2Cqd7C0oU1vfTq0jrxfoWHBTEv-oJ56rPpQKBjU6mQfQoKtslDFaHqRVii9sfk5YNQmHDyIRA__", // Finance 4
   
    // Travel
    "https://media-hosting.imagekit.io/8764c990c84c4fbf/Screenshot%202025-05-05%20182831.png?Expires=1841057937&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0O95Ua35kR8olosFuqLL6NEgjROcxRkKWb7p1vAAr27dbpfDAc8~31UVGuzBKrxoH3Ru7XwZUI626pgA5exEUE2VO9~28hNOeRxztKzjEXm23EYYkzWqHYO0SNIleJkHjRamLjrCa4wtRm12VsMrQEuHxyjU4PWHylhN8LQUAKdT54Fxr7CGKkupF1~9V9BZCTcLAS94Rr-69UaZ3yTCCWYOqb1vO6HKTyHP8Ldvz3SsJaMyBW5-IQGLZnniQqOOoCqEFUIo8PZzwhweUP8giyywbxkAtGQFIacJjoRkx22GybvSSTXsPHd74Z7vyvEazHMFD~7j2EUR15d22LpU4A__", // Travel 1
    "https://media-hosting.imagekit.io/ded4c58e48184a76/WhatsApp%20Image%202025-05-05%20at%2020.27.04_21f9f1fc.jpg?Expires=1841066463&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=INu9mmSYijr1jsGjjdYFlGTcdwDRBLzH8O6jZL84EC-APM0iWqb5G7~m7vZylzI5Tt7x8RJMkpcYYvyy~73tSGcoFY02K7X3235KIFqZeQsII09X5DHOdX6lRJTUegwpRFhcxQGxf86CBFsmBVnzXTGA52VmlrCXayWMDKago7yJ9UyHUXcAQuKxA4QZj37Pr-B5cx63dZIce8~jXjqYKZIBA~HNIudGxpgZyB9duLtgWq1nrGpO65PyPUJ8H7KErY1ddBheePMb4qrGTLqLoV3YuRg4zzZYcEgxnk0tAhuUlIHT3zAY7ZZLYlYFuM1GqlFfDadQvsmDUhLoXutUdw__", // Travel 2
    "https://media-hosting.imagekit.io/98423a7815334027/WhatsApp%20Image%202025-05-05%20at%2018.23.45_6698c504.jpg?Expires=1841057649&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=N9-cdTlQf~6XCFfzI3w~CYL9EKQyDFYdYuLXJVOUOZBZ~FzCbFr0px8f4cBDTvFDFlPPXP9pv67HjGAxFEr70x2KAH0yKdWtaov1HsmQOdXwZB4GGw0a4v6LIUTTih7V8QNnrvpUph1oLTghkchvvV-Kx7G-DeoUZs7GQiq2OX1TyxFtIRIc20Jhmr~auFXQh89lgwfw8q863WXfzpJ1tTHB5TBQED3Yv4x7NeJ9Ym3jqXDTpYDJq6ne9Tr71wthApMcbBVymH9Bf-xxeN6-7ktJN2n9l5mAF0XSh3JPXh9KP4q3YRClYUFElRBowmBu9KyMuh7mSS-mMHoOgjvhsQ__", // Travel 3
    "https://media-hosting.imagekit.io/0ba174e2b03e4cd9/WhatsApp%20Image%202025-05-05%20at%2020.27.09_0fc29b64.jpg?Expires=1841066580&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qd75O1IOoEb30Ed0~povUTPknd9l4t-8Fvpks7cddV0-cwo2mqjeF79nTavL7lUmrSgrUKVw4pmzH8UX4zgvtqJirHBDQc9220PLVtKpZQKhSFlv6E6Qu7-23SNsIrJOmhuKLqY4W7HZ-ywESANMWfV4DKvAAWXNAMYnZ8ZHFBHYfmyMpB5~4spYAKEqNHzLFko8AP639FSH6TQrrZ5fxyIWyM5jRa1bf3SHsb0Zr7QMCuwttNSlAgOqkfivOSf3AlcdXFXS00cqGCzVNuyllmv7Y3T98eVaRDC1hIk3mJjjSAr5MEd2K5RWENqU8uUUt0~4ReyJl~UU~yisbVjw1w__", // Travel 4
    
    // job portal
    "https://media-hosting.imagekit.io/d5bee15bc29343da/WhatsApp%20Image%202025-05-05%20at%2020.27.09_9326eed2.jpg?Expires=1841066746&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=grmnctl-YCVNkQjkgXpqRcpYl49744rRCVa37r~lVje~9O1MHU91oc~OS216nnVCVED4hUQslG2ATEp8Umn3l-z4apLmSWvR~ahvZ59QYQpYZj-Vi1WSjgfn--P6RLcNaPIEqwoCy4G2qLZN9L4fuWm~Wu61DXUq3bD5WTZ5BTTdn7TKScA9iQi5yHAHx3IO5yYhes0rAxT2WRvpRw90h4GT6Lf8H0UXWjf07AL75uUqkI4bhRGun~Ld8hONCMhmjv5XgslF4k9uiceqk2NKDvPeEQV8Uo707kNxY24k4r8dx0jcSyiiBiVGaPAX0zWlB38QyrJLdAA10HsguAO9rw__", // Digital 1
    "https://media-hosting.imagekit.io/ecde22955234464f/WhatsApp%20Image%202025-05-05%20at%2018.24.40_7495d87b.jpg?Expires=1841057992&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TflFq8267pLAOpp~sLH0B0HFIxyRxEi68KH99iFC4CNurw96sOPEbvRuEV4Su7eTbK60PSRNQvb1oSe2Goy7k07lAcdoqRjsEU6QCvgofL~1NUZBys94w6ZTnkqDTywW6uW51BQixjgSA0C33-XI~NVaIF4ncM0TNHMXN-nhYRblgYjGEYL0J-LZtoyrk6FvQwNUKOahDPev~EQUdtnA9bwSqZ6Yw9EIVmPCR93iQ~s0AiXtCa8T8rGnVKmGHgbdlmzgDlhqAF8W3PZMLflwaS8uapLtyAVUyYBmojGpF6anGBfyo9EzoxEum8pGW0vD9CV~99fX3FDZBa12wcoJ2w__", // Digital 2
    "https://media-hosting.imagekit.io/120e7552f3e847fe/WhatsApp%20Image%202025-05-05%20at%2020.27.07_124a2813.jpg?Expires=1841066931&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f13uoF2tgcd9akAFo2FcvFiOzQtCUnGgKstmq1F1bapM6yARrpQ-OxB2RYraepdDrX56E-clrZ-yBejzXA~ZKGmMPA4T~AwsTzYOEqYRyhYrQZtUmhblKAuglHC6a82UGmEz4fVF20Fxi~hM9lKxnYhrQ2Z2e1YGR4FlDepSY0jqytutJ~FyssxhpdhMMifA5uxNnjEXUAeTZZdEsWvfPrYpZciDtZ7tT71o8i6o-pWHBmsQy-PTYIsb~YZTiWRLPruB-sN~c1s~6ObShOX3w5P984WtDTIJJjoFXFMg~OdjU35WM7Lh-ZfBzNOgc2gJt6vPzTkdMi5YpX5LdEz8lA__", // Digital 3
    "https://media-hosting.imagekit.io/fdc0353693884802/WhatsApp%20Image%202025-05-05%20at%2018.24.52_a3fe8af4.jpg?Expires=1841058089&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x8myy3Lv~af0bnYeaj-zZsnS4E7rNv4duZt00BeC0lo5jz3cdyre5Nl2Yy-QJ7dSXgq3xXuelpE6Sz-yXXiYh7kP7RRFMWRifIIQPMn7BBEB9t7NEN8XOfdes09vRQFv78ZabPwdvntoVFHWbNLd7XfFJnBK48xV1J4XR4Mvz6yq-VUunzuygMq0543XOhEXmsbEFTacIwbGvsRuD9td9geBLBYCTpevrmo4M8mn-0Z25ewoANuRIt~kORfimTSI4yDulb8~MlMwdizmsqdr9YYQ0cBmPBygkwAGwYhUjWbwpyXPZsOt9vIn~F3iLw8GCDlmwjDPSssalifbdBFOwA__", // Digital 4
   
    // Real Estate
    "https://media-hosting.imagekit.io/87d9d7d30fc24f98/WhatsApp%20Image%202025-05-05%20at%2018.31.53_e8b15fe5.jpg?Expires=1841058389&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hIOzhOceNUb0xpTBq68MpY~dmTjktE4cdQ84WTP~UxuqQDchBprQO6XHfDzVYZNF-empUeaLsQg2Wc9B2g-b1lSGWfiDC24YVSjOpqFmVWPWujLa4iYtKgYEfdIhMMkA76aj9WW9Lj~elpQI47RsuhATzRUzBJzk4Sz3JD9Eq4mWu6XLs6Xy-FZGlHqDgamjK6-mJh0eItNTAGqIyDKOPdATF9nUehqhjP51iv4c0kSu-vCPvYXBAz7FL-Ep4U8MWzIzF~~cAFaUUH9FBhSQB3tjANu9GJ0q1MIVUDU6pESVx6NbtoRwJG5syBIU2iVCqD9KvhblJ6glR8~pUEutdg__", // Social 2
    "https://media-hosting.imagekit.io/5d4f9a5d906643a1/WhatsApp%20Image%202025-05-05%20at%2018.31.53_9fccce31.jpg?Expires=1841058347&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qEcMgsnfAxiRS3AK6unGxfJ2l9YuHq14I65xZ~Gry7GoAKM1CcZONORE6vbjLrziyQ7Kh19JgeQ2CZIqOqbWOehfy6LZXBwhPDz2ZhrjgzLP3x8BqI7YPXv8GH~mym9CEz9i9X0rdVeu3DyjoyLnuxvbPkHvVuqVvjCk2j7t-VSa91NrFY3AP4GWqFfkBMOsn1je9ckIz0N18qCv5UStDt5xC8f9z3ZEWojy2jtcCxqd52WNXPbfmtzVzO5czcoYJeT9z8p3QM0JUKjxvTkEWnrJGisk7RYM4jMgHv9EDhDOUixVA10c95l3liSUJdcVQ04uXxPNOzTFOGYpRBJJpg__", // Social 3
    "https://media-hosting.imagekit.io/8764c990c84c4fbf/Screenshot%202025-05-05%20182831.png?Expires=1841057937&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0O95Ua35kR8olosFuqLL6NEgjROcxRkKWb7p1vAAr27dbpfDAc8~31UVGuzBKrxoH3Ru7XwZUI626pgA5exEUE2VO9~28hNOeRxztKzjEXm23EYYkzWqHYO0SNIleJkHjRamLjrCa4wtRm12VsMrQEuHxyjU4PWHylhN8LQUAKdT54Fxr7CGKkupF1~9V9BZCTcLAS94Rr-69UaZ3yTCCWYOqb1vO6HKTyHP8Ldvz3SsJaMyBW5-IQGLZnniQqOOoCqEFUIo8PZzwhweUP8giyywbxkAtGQFIacJjoRkx22GybvSSTXsPHd74Z7vyvEazHMFD~7j2EUR15d22LpU4A__", // Social 4
    "https://media-hosting.imagekit.io/40159a2644ac4409/WhatsApp%20Image%202025-05-05%20at%2018.31.45_2673110b.jpg?Expires=1841223213&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U5sjK05uQU0LI4mnZKbcTTtbB7a8rD1fZORpcBboFFOXPAPZG424OPlooLThW8EGx~IOLnToYQaLpze6HePy6D0SSa9dDRXgYv4K2hS3xepGoa5WrhWvl8k3cW~qrDzXpu0bjmJxSEcb7Y~QBK5tWu4rWy7KzyDaetvvgFTgKf9GBYsS-YPADLADdGJ79RLG1WQ5EEV9dntCIX6brf5D7-1vvER-2Tn9lbbdWA4GT~~jZodYmPGhPPtfF1ggbbkSJhxRnsrN5matdvBP~lqQSp1LXSBfIst~yOxaIa37VXAsPzOzdGhe3aZBffzlDYsAvfcJ6pfLmSv0NFph5K~dpg__", // Social 4
    // More 
    "https://media-hosting.imagekit.io/d5bee15bc29343da/WhatsApp%20Image%202025-05-05%20at%2020.27.09_9326eed2.jpg?Expires=1841066746&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=grmnctl-YCVNkQjkgXpqRcpYl49744rRCVa37r~lVje~9O1MHU91oc~OS216nnVCVED4hUQslG2ATEp8Umn3l-z4apLmSWvR~ahvZ59QYQpYZj-Vi1WSjgfn--P6RLcNaPIEqwoCy4G2qLZN9L4fuWm~Wu61DXUq3bD5WTZ5BTTdn7TKScA9iQi5yHAHx3IO5yYhes0rAxT2WRvpRw90h4GT6Lf8H0UXWjf07AL75uUqkI4bhRGun~Ld8hONCMhmjv5XgslF4k9uiceqk2NKDvPeEQV8Uo707kNxY24k4r8dx0jcSyiiBiVGaPAX0zWlB38QyrJLdAA10HsguAO9rw__", // Digital 1
    "https://media-hosting.imagekit.io/ecde22955234464f/WhatsApp%20Image%202025-05-05%20at%2018.24.40_7495d87b.jpg?Expires=1841057992&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TflFq8267pLAOpp~sLH0B0HFIxyRxEi68KH99iFC4CNurw96sOPEbvRuEV4Su7eTbK60PSRNQvb1oSe2Goy7k07lAcdoqRjsEU6QCvgofL~1NUZBys94w6ZTnkqDTywW6uW51BQixjgSA0C33-XI~NVaIF4ncM0TNHMXN-nhYRblgYjGEYL0J-LZtoyrk6FvQwNUKOahDPev~EQUdtnA9bwSqZ6Yw9EIVmPCR93iQ~s0AiXtCa8T8rGnVKmGHgbdlmzgDlhqAF8W3PZMLflwaS8uapLtyAVUyYBmojGpF6anGBfyo9EzoxEum8pGW0vD9CV~99fX3FDZBa12wcoJ2w__", // Digital 2
    "https://media-hosting.imagekit.io/120e7552f3e847fe/WhatsApp%20Image%202025-05-05%20at%2020.27.07_124a2813.jpg?Expires=1841066931&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f13uoF2tgcd9akAFo2FcvFiOzQtCUnGgKstmq1F1bapM6yARrpQ-OxB2RYraepdDrX56E-clrZ-yBejzXA~ZKGmMPA4T~AwsTzYOEqYRyhYrQZtUmhblKAuglHC6a82UGmEz4fVF20Fxi~hM9lKxnYhrQ2Z2e1YGR4FlDepSY0jqytutJ~FyssxhpdhMMifA5uxNnjEXUAeTZZdEsWvfPrYpZciDtZ7tT71o8i6o-pWHBmsQy-PTYIsb~YZTiWRLPruB-sN~c1s~6ObShOX3w5P984WtDTIJJjoFXFMg~OdjU35WM7Lh-ZfBzNOgc2gJt6vPzTkdMi5YpX5LdEz8lA__", // Digital 3
    "https://media-hosting.`imagekit.io/fdc0353693884802/WhatsApp%20Image%202025-05-05%20at%2018.24.52_a3fe8af4.jpg?Expires=1841058089&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x8myy3Lv~af0bnYeaj-zZsnS4E7rNv4duZt00BeC0lo5jz3cdyre5Nl2Yy-QJ7dSXgq3xXuelpE6Sz-yXXiYh7kP7RRFMWRifIIQPMn7BBEB9t7NEN8XOfdes09vRQFv78ZabPwdvntoVFHWbNLd7XfFJnBK48xV1J4XR4Mvz6yq-VUunzuygMq0543XOhEXmsbEFTacIwbGvsRuD9td9geBLBYCTpevrmo4M8mn-0Z25ewoANuRIt~kORfimTSI4yDulb8~MlMwdizmsqdr9YYQ0cBmPBygkwAGwYhUjWbwpyXPZsOt9vIn~F3iLw8GCDlmwjDPSssalifbdBFOwA__", // Digital 4
  ];

  // Sample portfolio data with 4 cards per category (40 cards total)
  const projects = Array(40).fill(null).map((_, i) => {
    const category = categories[Math.floor(i / 4) % categories.length];
    const types = ["Mobile App", "Website",];
    const type = types[i % types.length];
    
    // Project 1 is special - using the suitcase app image
    if (i === 0) {
      return {
        id: 1,
        title: "Smart Luggage Tracker",
        category: "E-Commerce",
        type: "Mobile App",
        imageUrl: imageUrls[0],
        description: "A smart luggage tracking app that helps travelers keep track of their suitcases, with features for unlocking, finding, and weighing luggage remotely.",
        year: 2023
      };
    }
    
    return {
      id: i + 1,
      title: `Project ${i + 1}`,
      category: category,
      type: type,
      imageUrl: imageUrls[i], // Use the corresponding image from our collection
      description: `This is an example project in the ${category} category.`,
      year: 2020 + (i % 5)
    };
  });

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All Work" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            {filteredProjects.map(project => (
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
                        src={project.imageUrl}
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
                        {project.category}
                      </Badge>
                       
                    </div>
                    <h3 className="font-medium text-zinc-900">{project.title}</h3>
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
