import React from "react";
import { Code, Server, Palette } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define technology categories with their image URLs and proficiency levels
const techStacks = {
  frontend: [
    { name: "React", image: "https://media-hosting.imagekit.io/d66010596b6e4a26/WhatsApp%20Image%202025-05-07%20at%2021.06.16_de10d42b.jpg?Expires=1841240343&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tDlw4qoai~6yyvDt6mykkoUWiIdrUSqXkbZF9WvRn2CoKVFMkaBaDdJ9MrHPCDQdoISHPcrxftm7WxSLeT4p7BLYxR~DWzc4q8VTFKoroPeZSOb~Jvh0eP55N2fAuvra3KLZb3GqIed7dz6jXoIxscbvAWuXxpIXogN2tYDZt6dEeJgb0M7Tjo0yssmPVBrHRUtSb8VDSDRsFdgUJOayUfkHbMP~ozn8sV3Nt8CfONCIGgJwYtOfGni5mAbF3VMw078MDYvPAJjYEXTZUUTb~WTPSbaQvmtidOKJLQSJueoGGe2go1avuqyiENwu0fa~CdJewhgmCyHT2zMCgk0fnA__", },
    { name: "Next.js", image: "https://media-hosting.imagekit.io/b6bab3968a7b4822/WhatsApp%20Image%202025-05-07%20at%2021.03.52_c00c5d46.jpg?Expires=1841240223&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=erJHkQ-9jGWGsYurNx9Jf~0tBmy-4trrbxTFic7sOiUVT5hU20FhwNcGHwLuzvz5MNcEKwB-CChzDc~OjiaoauxfudseYDvIzvfvurMzKOhuJSQNAxAo5Usx7ZXDLBBVqHGqyAACE2KCivvK9-FebMFnUKce-WN3WTXthrUoSpqAP-XSP0IMCfAAF1KFBKcHwy5JBZ7qIUJuxwHMt7adrkir-cU3O8nT055HwsqeMKrU0t6ji-yn6pHv2smL2js~8XwYc78bIXzDh0976YpKSMlyFnozWUk5RCTLYxQUvF87ZWPY8R5V6RDw4SmQ7-pt5cV2IuEV9SAYsXO9jrsoQQ__",  },
    { name: "TypeScript", image: "https://media-hosting.imagekit.io/3d2eaba63aa54baf/WhatsApp%20Image%202025-05-07%20at%2021.18.11_50ea6a66.jpg?Expires=1841241135&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eMfQEJVQlm5lQqAANUVa~d6YqrMnmkzrBiFri1oYT6DnD0dZfEFNJtmamQbKkDWar4PFE1GOVRaKQpzDK4lNoG4AD-X5F9RFMtgy1ZsW36Gyvq~1gdGlfSfrDAzJ1e5wLGmPgQXp7aAnQXfUqagRu9DQY3JoQ8x-EOWGGpK7V2IPQ7OJQWTpshiE5QSZgODa68cee48J~vKP2-ZX-0lNmeFmg8ARKijV3A35yZCTnCBkdGGOON4-qbU14ICucidIe4zgx9eOwklNS7704b30SlNlo7cpmLFK03pFtRwhj9D-ACUdD172w4Oj1ckJxZIeBvcyL20Qd9PIrORVZ42jgg__",  },
    { name: "Tailwind CSS", image: "https://media-hosting.imagekit.io/bc546c57194f4ec4/WhatsApp%20Image%202025-05-07%20at%2021.08.21_c22db209.jpg?Expires=1841240510&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kE0fUr37BINRqgcjqLOyJbBSatG4~uohgkUMpCYvleGlMI6pj~aFEupzEiXF-sx~8oZw5EY88b5Pf1mW9gx0CL3ji2dJ1Ik6VJtN5dAmjCijFTT7a4~TSBdpRf3UX0Hqt0tZBAjgyIy8rXmc6~bpH96tIZS7yXmx~9Oi3-o2eEnY9NqSxXBMtRT~heLX0fva9ZgJsLJX1anAwSSDiDiu5OQDxMSq3DLU-SKPHBbmLCh514koY-opniX~bTUx4Cg7LKHgvF5vgF5NTlh7ugqLHk5~9d7uW9rr7M~nrvm9nUxJN65wSTkm25Ba5AtnoEtwMLYkntTlstZ~BIOHYyZ1TQ__", },
    { name: "Shadcn UI", image: "https://media-hosting.imagekit.io/e7fa73b95b9f4a7a/WhatsApp%20Image%202025-05-07%20at%2021.10.41_e58afa8c.jpg?Expires=1841240631&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sHFmWnIG1uNslQXSP02CRtO4z8oYw0o2mXEqpVIRzLbYaK6RMdskFPp6d9VTefCKQnCzkMpNrjOY1mIAjwPPmySZNTMFDlDXtRSCK2SXiMsDenaBDdID~uICDuz8G75iqDgZATc3h4cB1tOLORt44DY9sCcxn1oBIumn9TYeoyxspQTfqCjW8yCYYZE44Hiuw9olwiGDwc0feGLnSqm9CLFB-q5xFfSv3RL90usU1YNOQx5Om-vpOx9u0a5T7gn50F-pbgpCh2usfo4T~4PNuaziRFDrVe7QldKbMvFXOh7ZYlDuYEJQGl0Gb6Hg3DWhFM5d6bvs-5OOasVwxNageg__", },
    { name: "Frame motion", image: "https://media-hosting.imagekit.io/4d59c5aeedd24285/WhatsApp%20Image%202025-05-07%20at%2021.14.52_3da3d015.jpg?Expires=1841242903&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cmMls9LRExGtVjn17HdIQdkR10Ebry6B1ccUumWn4ROOgvrjK12Ge-8RIPthPpuMij6EHtneXUvhN-4flQn7AQ0wTqaGsGwWDd-JOVjRW-8q~PcFMZ~3C2G5R3GnUY45g7RNIyinhtzH4pd4bON8327zrD93zIDiqQgiVwDkcm22mgkOLH2FQr8RIZoWMwmh3fZ~RwDbI9mQhXYVidXOviiE63dJBFBTKYVsheSZ2OS6Upm5gMiT8VHWcQhCcrblw0-bPxcXB42E09qn0II4IjvofMepEoF9JJFUZglXtWBrQ672pXAWDOnRenCMllOIYSX8Cbd7GH31h0kUK2mbPg__",  },
    { name: "Swift Ui", image: "https://media-hosting.imagekit.io/b21a87aedc4a4631/WhatsApp%20Image%202025-05-07%20at%2021.42.42_ac6cd9d9.jpg?Expires=1841242470&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PjZYfrKhNj64PHodATkYQB9zeKCvaT~vazg4I0zU01JNMoqNoiOFoT3Y8a6K1dxhIe4f5LHoU2ELYFQNgl-B0Sb29wG07EX75hIyZrL-PIaazGdJWuyKy72BeZ6jU381bBH7ztot3FAEgUQfRvoVQ0Lw7oPLAfoFU3odviehYsxzfcHNiMFx85KO1munX6afXmTEuNn3cb1JIA7DVbHZpWacCn6oRR5P3eg9J7MD8kyoMEVwIVY-iccAbbQNoGLokXpQ2Lzo5eLI~4h-lyFAvXThIlZBw7-CdjEqjPsyLaYfSW3KdbvAWp7vbZQIbPOsmrOO0o5woFzM3tpD4mHRsg__", },
    { name: "Vite", image: "https://media-hosting.imagekit.io/bdfaf348da1b4331/WhatsApp%20Image%202025-05-07%20at%2020.54.24_db281b8d.jpg?Expires=1841239793&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i7jve10XJHnB364l9Fnn0dC-tqeY4pEZSvmnkF4t4IViNA5iNKfT1487pmAvcf0-5-J7bHofuEz25BV8goCDPADNbjKF5vguTorxrxmp3wZitROlfz-tbmLe3cJIq2S4Uh9yQLb-eVeIhF85z4MZTB11va4WdDANioUZzF7yWVUm6-MWiX6O2QZrWXntTWjGOZPtDpxofIbGdNTWoGR5dpfSGvUNrcQBaxYJzN9s7Zi4GzRGWhBqk1WaOMpGQXPeE3Av0bMBETjlm~gfY-2TyP5t0RXYnCxppOMP73bFpeCjQ4tG-~cmS4sg1oYIjffxQ5~W3BtxCnQpCpD5UY-0AQ__",  },
    { name: "Vue.js", image: "https://media-hosting.imagekit.io/532a5fa1583e473b/WhatsApp%20Image%202025-05-07%20at%2021.23.41_57d6b9d5.jpg?Expires=1841241432&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=d-9n-W2AFoimZFHHuXWQLinSie-WrHPihMlhu4UfAZv46ZO5rUSmo0IBD~qjLWmgMXUWm5T~zLvK2OfAV4n~RUcW9rdf-6CV5hd4zeTOa6oULKX8c1~JPJoLdVuz0jlO72Q1RJ-T1mTdLMdMGmU~oaeChBEXSDgQuw5oXkNFUA0STsGhQMagCMf-Q~Jqe9U7F8Un0xT3v6TVQSXyJwCrJ1w4oFCWn0gokTQwF2~ys5n8BDTGn9pnlrw2PjKM-70dmvuOE97D3mTv0atFaMAulwlZTskuMupv-6LJobcDnaI27y932I5Iu2H7no4oa1wzFJzv9Wgqvz0Rdd3KoVR07A__", },
    { name: "Flutter", image: "https://media-hosting.imagekit.io/fde4a27a41ec4350/WhatsApp%20Image%202025-05-08%20at%2011.32.51_6792f13a.jpg?Expires=1841293122&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=istZy6fBDzde3BxHQyDVOMEXAuh2gIoWVpxPotUlMknjEHOpjxFTFaYhnbea7741LrKarMEoG4hRpTPrU9dILcdP8wx125O0MnCh5GGFso0ZZuRd9mAehwZ5LQE-RPwyS~RlIeoCsg2wzU9pa3HMtfH1447DWWdVH~9NS5ZN44PuRVkjnCUlU4eJhKv4k1zOp-w3hR~eLqkw96SanVTQLv9L4SsgJ3nGv-3KCvVAbtkFMddr8gdbQMzeb3Bda9ompC~cyYwNsod4xX~1P4QnPGFObW-EQoRhUmN6RmfQYZ2M8V2Rye01Z8Seo94v0eRHdgmjgzbUK2fTp2bAcocClg__",  },
  ],
  backend: [
    { name: "Node.js", image: "https://media-hosting.imagekit.io/70824d786e8a4e71/WhatsApp%20Image%202025-05-07%20at%2022.11.51_b95994a7.jpg?Expires=1841244193&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LnwwF~uHPffLoBcyLBi6PsvK9zKK96DlFOKIKCcS0AqF-l93wx5TwJNBFWjUC9HsisW~1DpIx1smcUMMQi~KrEHVL~imTWfLDh5g~rglJmUCJpEl7FAK3NKP9yUKks6ulxqQ45TImTVbfx1PFVjuT8n4a8JeFf0vf~ChChfXqDjGS8DEFwwjYGBwT~2VWVJ1LFfWLHim37~xiNOEXCO9v6RdDDNGUhTShP~939F~I~V0JfIpU18Wx5PKneTu6pYEZuIUzTENKl3RlfVvLRmABasHYywxw~p9a3GauUcd1mb6bZoNCJdiz7mh50q02v3G-RsyhqcwQr7CXbv9t4RIHg__",  },
    { name: "Prisma", image: "https://media-hosting.imagekit.io/c999b49a45db4155/WhatsApp%20Image%202025-05-07%20at%2021.27.13_19f7d0e1.jpg?Expires=1841241812&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cgFQW7n7Q1dO7D0MBUFRbVL7XR-A7Xg~y3zhAH3F-Dp0PB1Cd15OR~g~CLKGTL1hH8dI8tP7YS7xXhm69pvkWmKD5-aNcDA63sq9DmUBWRhXjVZt6N7FfWGbUgdph5ieQUgaz59f5sSjD3q4F-8n~FdCvgBdXmaXZ4oiDG6lArMa7nJFROy-lvycg0apJq-InsV0Ir-FyuNwf4HkBc0rzpJbNynRhXqwCrQ9CVeH-53VFMsXX4eESB1B3bVPx3YtJHlI5GlbK2JA1nvKtf09RKF5roPS0v0uH22ugCuMFro1DMSDmDe9G-hsfNKJakMxNRXWqlmlSLvE5-sywyStzQ__", },
    { name: "MongoDB", image: "https://media-hosting.imagekit.io/60a3111027c44e30/WhatsApp%20Image%202025-05-07%20at%2021.36.34_84474156.jpg?Expires=1841242094&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ajIxv79akvOY4R8fNwFe-2dxoegIz3uTiWbbZ8wP-NC-EpMzjb-0P7qT7JWfgs557WM7IaarE1u49Mqg4cV6gLxG3E9SeAmkRERna7vToSGBCuI1rpwQMMtSZcMECDBSuXqpiJObqT361u8EM21d4OVC8wBIg2vxQ4fTqDraUtLHwRNLdGH8Mr7MtyLPAVcq-~I2n3xS2GfxiamyewDuQVEfrQ0-P7zm8lwS5bFmmQ7gqVZZYXs74TSxp0SyefmGDaXGZoyxAACb9CC5KS30K3MUkVHO6anyls8KcRD5NZVQCb~t2I4cZaPf0PVkS4nnXBrYbv1Akmw~-Cz8DqE9KQ__",  },
    { name: "Superbase", image:"https://media-hosting.imagekit.io/7b6bde43992246ba/WhatsApp%20Image%202025-05-07%20at%2021.25.36_1bd8c734.jpg?Expires=1841241641&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KomLk8POP41T2o2syp3exjAPqdiVXDABS4hRCfycn4XZFg-oJj9AhniNuA1cgEj1RLbdheRbeDFIl6fFoWQlYHwvspAwxV2EyOJGPWsTsrAVqopJKnEoXFg0VN~wnHSqxyZ9n0uLrI9isXluoPaQFkyIO~5tISCZGrDD1HPrmbUHkk6KdKpMYH-IhQrA2QTtTKSRArsekVb-8NWgcX3y07DuCws0A9K41kVwuF7i7yQBqPWCtVvyLq4BKTT5gF60xB7FK1EkgJ4EShTZZXHT97BaSxsKib4cPsmOEdrS-WamkvyEDsTxOwCoj9txU8koTu~NhP0F7woI~9Uy7CCNeQ__",  },
    { name: "Firebase", image: "https://media-hosting.imagekit.io/1c6b0e947e1d4f79/WhatsApp%20Image%202025-05-07%20at%2021.31.16_af42cc69.jpg?Expires=1841241914&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EC~P37j~Xn6XisK4jgjS8EwxYJ2vFwYjE7AcVwN~HDRb6FHPWToyoNMKh5uT7V29qaBI3-cEww7foGg-1R2qePZm4P48rHfaRFd0EllpBLXoOMnfiF1tQavY6aMpvQveMiHqIxjFqDHlebB6-k42VBGVpk~pMkcvT6h9nf79bdd9eroXVX3pjvS~tGKsc0asRqIZg~knb1kA7Md7XzG~Gvi-dfbFgEg~viXIp5JEGzLajaV-V6VhHzbV8wSMulAzxec~wEe3DCXMtIsDJiwLYj~KcRmT4Aql2DsvyaoFhMxWFB9sRfJ2zwzWi26sKmjNvPLeyQNthtfDfHfYuGbtCg__",  },
    { name: "Railway", image: "https://media-hosting.imagekit.io/a3142bc5ed0e4def/WhatsApp%20Image%202025-05-07%20at%2022.14.33_55cdb85f.jpg?Expires=1841244345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WZk0pWjczAmHkbhKZsSZvnG3Web7ygbGxoAnH4RApLUbkFyoDYKZhkyf3pGiQqnQ2H7xcZKw1p89uKuEaNPzEXLp~z2vcJ1l7u619~PsQw3nmQFjRTnFZu2jTvBcF1dsJbRqtq3Udg1dHKubUS3ogP~WFYzfK8WcRQVmr5-j9nHs8ottrv4zr9w~RMwY8NR9xHkLVxNfynyThRslJHTsT4~P6WpntkR0GbE73vpqqu7j-gH-cUdq6GxHz5MnlEYB7XN~4nuciYinWWuhcgW3h6Ele0cVVhdU-Z7M3Aze3rL7kWHRHkktGvluGYMaTFUEnRGDVGd51dPOrUVI2TQ9fQ__",  },
    { name: "Clerk", image: "https://media-hosting.imagekit.io/bd5156632ae745b9/WhatsApp%20Image%202025-05-07%20at%2022.30.43_d0ea71cb.jpg?Expires=1841245358&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vCmTKJQ~9zUQQCvkAgFWYhlVcKofrSUjEGkUVNWKsz6ZGi7ksyuX6I8lH5lf8WNjvDMPdC1K-kYcdo0NTSfijptzbDnl6xcO2PQDrcpA6ke2l1RohMZ9wdPaApZT8DkVbyORXDRHc5oHINkog~KZcHTBtfkTxH0WLCHfKRmrzfQGmOVyaYKJcjA~yj9POXAKf09ob0mTKE0xaqTQ97Zm4gu-blT3FO1JxSLy~P-LavzCM-EBZ4uY4evA9v8la9JQWmbxCURIOxHVyBJrYmrfMjdJudZXZtlEUDc1MMh~4IAHcKfwOK17zcmhcptuGHBS0yPJ070NYz0IraQEQAcipg__",  },
    { name: "Docker", image: "https://media-hosting.imagekit.io/df0ca3e19ea64c70/WhatsApp%20Image%202025-05-07%20at%2022.00.09_61bb0838.jpg?Expires=1841243573&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DHZC9KdJEFY2Q9Icltg90~x5RkTO0sv-WnusUoGwwElzXMPooFrFYm5PIEkmmcpJdcr2uAMeiQjXHzLRPUJf0HKaZrfe6zgWKx65w-M3PvEjpOGwhPQCPFAkuvNTckxjVJh95H4V5XpyYrVNCfvrOqVDB5Kgzq6iUmC02n6phCZwBt0F~kqkeh6SOGprDvMdh8Lj-wj1zeLjNtq8UVzLk1P3MM-7yjr127fCXD0pceGcHXUpCVODWs2FzCpEl01ZEJBbWl~uA3PwSQXRBgYAK3Bsq-avi52n~PJW9Anta3lAWRBx87FV9E-EyggX0MCCghHkzORb0e8cQ6Ka~fgyHQ__",  },
    { name: "AWS", image: "https://media-hosting.imagekit.io/20c4916a040c4b61/WhatsApp%20Image%202025-05-07%20at%2021.56.52_370bf4b1.jpg?Expires=1841243404&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=esmA7szL9xhdkVpRvOmfmV8hPEOEY55~0RMo43VaO4p-urmC5eZKVQvrwKcY-pCpKUINCPTrnqZTLmCfuSz9WIODaWPNwxpQb0VJI7wUtx0ZWxaEENlQSAW~wyV~xJ44L4F0pG8nHfYolgOzV8MrCcdDPow70cVmSCyzLpKlFKOkOeDJ1X0JathXfv5FsFkPNVer8G030mPNb57IL1HO4R7mWktUCve92lwoKqhOs-9qzH8vtN7fm3O5qLAxgEnMs571sb~U2EAg84fAbPRaLA7UIcFzuQC3Ld6e1z8a2n7YjFeqTBIWmYmHmnPXqoLQgBQ69eAALYX-QXbXFUl9WA__", },
    { name: "PostgreSQL", image: "https://media-hosting.imagekit.io/30761151ab1f4ced/WhatsApp%20Image%202025-05-07%20at%2021.38.27_e5fb8049.jpg?Expires=1841242250&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jWeU2nm2~bDQE1CenPgKAs9ROKEY~MSpasob2d4VdrY1UkQV6zDb4Uj2ktddbIAKA~aJi6mpmCZf1W7u-~LL25fmEjtbtKChvjqSzqGMh5sJHWdRJFkv74u1-VtgbHBDJ5HMcm7xvccALuyTXWTzccLaEdMSSjJGYNLxMPIoiSe0jwCUO6NdGXVN33yslREao822ZIzEVlhBcFVRGIEqE2zGyoI~7ooiP13SyD0jidUNtgrrQ-v0IBlhkys2Y8wZFHtAZ5bQJFhzdlIoio-IPm5LA9oOKHuLlJFr0vQKkiYN3kE4fxcHh2TIdAGphf8J8Uc1JEseDHIIeZC0LH6Y1A__",  },
  ],
  design: [
    { name: "Figma", image: "https://media-hosting.imagekit.io/0cae3b8c443b48f6/WhatsApp%20Image%202025-05-07%20at%2021.46.07_616d3fc6.jpg?Expires=1841242660&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bomJKjXkesBYTU1Zb38a-OCps4ruj2k2tDgfRQ~nJrzp10uFWxaahEqY8nrz1O3r8Qp083drty1H14BzGU4F8kIRKHcnuSiIg8jiifxxXp2So-Uc2DxleQoeOch5~GkUCP4w9orq5Pu3NkhJrXdjE1wiaFpFCCycwvrM4mei3wlDa~ZeiTDjbsoaT~C-eq6x-vZ9hejdlz4-9WIB-HEndaZCoFvn454UMkxSzSozMNwjkJhFkauzd6up9BWOwICenN1ZclZUbmGXVzo81FQR~sXen~~ZEno~4IfY3iK8mb05Kik2bSXaJ3Yx4gFjyMTUcsgMQAkNRP6jMcB5rAYuuQ__",  },
    { name: "Framer Motion", image: "https://media-hosting.imagekit.io/4d59c5aeedd24285/WhatsApp%20Image%202025-05-07%20at%2021.14.52_3da3d015.jpg?Expires=1841242903&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cmMls9LRExGtVjn17HdIQdkR10Ebry6B1ccUumWn4ROOgvrjK12Ge-8RIPthPpuMij6EHtneXUvhN-4flQn7AQ0wTqaGsGwWDd-JOVjRW-8q~PcFMZ~3C2G5R3GnUY45g7RNIyinhtzH4pd4bON8327zrD93zIDiqQgiVwDkcm22mgkOLH2FQr8RIZoWMwmh3fZ~RwDbI9mQhXYVidXOviiE63dJBFBTKYVsheSZ2OS6Upm5gMiT8VHWcQhCcrblw0-bPxcXB42E09qn0II4IjvofMepEoF9JJFUZglXtWBrQ672pXAWDOnRenCMllOIYSX8Cbd7GH31h0kUK2mbPg__",  },
    { name: "Webflow", image: "https://media-hosting.imagekit.io/5f99b8fd95e44a90/WhatsApp%20Image%202025-05-08%20at%2011.30.41_e56521c1.jpg?Expires=1841292413&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=csYIwH0h~FYu~BFMNLDtY94zU2nVy7RGIRKTcuFDUwo89rNkjoCGZ0Vu1j1u0QmCkpn~mYrpeK-0GbzjBhqTafXTqDUCr-A9deYsgIl5m5dPga0vBvLdJe8iYdL1uqNeP~hFjucfpLm4HEks47a8S-7Eox9YsNMRxmbwuq4jIb~JEHbvmsarqrMZhEu8na7p5zXpG3v3wt3m-6NeCeVzmdqdC~T7BryX5Z8Kce~f7Zgau8muYrb5doQPxAVhTp7zwNUe0ZoKhRde4zjRkkaGkJRYqyX7sAykwxvLtlHJ58uOdgAwr-hBtN6BJDYcvR3fL2smdPMdXL6TnhG56x~cfA__",  },
    { name: "Sketch", image: "https://media-hosting.imagekit.io/b3aec422f1234e3d/WhatsApp%20Image%202025-05-08%20at%2011.30.41_02e2ed0f.jpg?Expires=1841292695&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uisYMdjAXDkEfiANRQa~9V-NlF5sSmryanCTOOrRCvI8DSHi334kxatb60e2GHFtVTgMG~heUZaPpG4S2dokFSWq0Y2mk1mP5uFGZYGf0quj4FzNpFmIMIvyzr3NKiPyEhPCdP4G7xgohxVvEft9RUVw4q~76oL9lvBh~dktQVI6kDJwW~xf6n0X95Bie-h4Ksv7QbdoSSvNll9HTmWe1ITh7-M9UtqLf0LBq5yICN~s8vdu8tSIf2LfkSYbj14GuHNJoc1dCMeWiA2U7reL6JezsVpFT4TDk8GdCIZAuFQ0wO1tCJz4PdCeulwY6djX7TnFW~5N7v4Au5j7ldb9vQ__",  },
    { name: "planetscale", image: "https://media-hosting.imagekit.io/922e8cdcd26b41c7/WhatsApp%20Image%202025-05-08%20at%2011.27.38_558c4ec0.jpg?Expires=1841292106&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bg7Ov1MHmZgyame1lM9ZFmUdbgSXfbPiQdt2Y24qALRus91hLL5VTVxJMfijsbUBqMdQK41gBmq~5mcs6lsCnCLZphxKwIaSAy~zT3Tat0QxBjNdf1S5WDONNtVPVM1K-Qekq~rJi7Zo~b-l2FxpiLQpCLDukpnHVkWp-b-1GwKlbQjacWPyqqQrr9yx4VDALpEWUl~cHArLTDKp93mfgvDfc6fyDc4r0NLmJJ25YyED3ZNSKj0Gb5UvMMvKsV6xyafX6I8uDX9gZr2iXc0swuP63vzq-EC48BOYfNuH15R-54jBCJUA5815Q0TlfkprfEEWKhfwenZF4g8H4xPWBA__",  },
    { name: "Redis", image: "https://media-hosting.imagekit.io/2104a1a04f1f41fe/WhatsApp%20Image%202025-05-08%20at%2011.27.38_1925f608.jpg?Expires=1841292293&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IWEeWHYhx5jMpz0WP70Wax1cO4lI7TC4i54K04H9dNRylhf~InL10cnqNp-N6KR2SKEz9yLjJECaA3D~SIJxBBw0OiYugQFZVK396yLTI86FR-h2up1M4vYfXPRO4d4j91PkWZ9hZ~f5XdpYMrAQ-QecWoCHuB54zD56NFPtYXUZhOvml-UTIGWAwq3JN0czI5Y8IuPMVnAkk31NcG6uSzMQ2y53whJA51dfQhzLR4YpRRW2VgYIel1uUQtT7TLw8y8cMtr9VfzMniD530Za4P0Z~WS~13wGv-25T4d~OGN69QQ6QXGGTFAWN~PiZLS1tl~g1DawYAMJSDoxQGHObg__",  },
    { name: "Notion", image: "https://media-hosting.imagekit.io/6adc067d6f1d4ad5/WhatsApp%20Image%202025-05-07%20at%2022.03.54_79013477.jpg?Expires=1841244684&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lc2R8kcB0SvCATwENpC0yzqPzaTF5~Qyib4N4G6CV51zfB4mvgD7IyOnyB7dX-YunWU-JuBsijCy-eBC0gh~8eJfae8Eh1CCBUrYETtscFaajdaOBkNRNuM21V9qPCGZHiuXIF~g7tjw6iZ7kFuJaKq-iFcFllC4YU1-wKsrAF5LiVAlm62UoKVl59qM59u30artpZ9Oy~gwvbXY8N5uShCHbQ6guWv7NMkjiBb1V33sDWn9mfbWWHB0JdnEVKdBiHIMw8O7FkxuLHC3a3Ec8ZbImJfQM6aHzbIF8EZUdxac5hpvzH05fPUCB-MsGCVc~xSRJhnikyYTI1NZgHxbPw__",  },
    { name: "Stripe", image: "https://media-hosting.imagekit.io/a0b876e3585d4e6f/WhatsApp%20Image%202025-05-07%20at%2022.07.34_0792b129.jpg?Expires=1841244796&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bpUDUNxPhAgj87ANRAhUp5fw7Q-vWk8khRofqdSUXlU6ZRfz1ijYyu79aoEaqCcI2325Fkf0EdfZzIQSg~o9fed-kYL2w3gl6MNKjK7euDPS3jSpjrl7Zamlpx-x3tPvEq1hyvgm7CD~f3qVUkEzryvv52HyEKOQJ7bLIbiho0tDx~eQJYm4T9Dl2W9vLQvp4~13LsaD6ZERoqllyMT9s~pZ6jFXlWJ7KM~6vXBs3ucZUTV98Q8LY62XHoCdiV3V7gD6tsNij12OC5t-oVyk5yGcoCHFNhOOkc7CTLYHnIt5OFi5dpxfeZmmeRQZUO7p7rl61k6mezDbK22Adcks2w__",  },
    { name: "Jira", image: "https://media-hosting.imagekit.io/ee63ba1a83cd4021/WhatsApp%20Image%202025-05-07%20at%2022.28.16_5829ef67.jpg?Expires=1841245241&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U~QWfNKOq-m1LnSdpD7D3oZsmDhiXBuXxLQB2UVMZAB09HAJc2x7rh6MNhl0m1~Mgq0kLrnLz~En7Z2A1RYvlcJ5C9vE83h1LXOq3n1kKAAxnSGK9N4K-HcL14NNN6BnGH--XTGDZQu0nRcNvrYx-WyAo0bwOCcvB8UZi7-ZhKh9IvIBZ1u0p5~COAwHasPV04DjBg6lA4W9OeNQcBt9RYoSRC7wwRnuynOeXnEYjs-WHaIw07ZTsyVaIavhWINO3ERvySuCVXh9feLfQLz1d1LmbfHSme58rm1mbytq3cmhGBehQqLJByKRWg-NYG4M0iX36e05dlqhYDNFXLCh8A__",  },
    { name: "vercel", image: "https://media-hosting.imagekit.io/85d139f1f6264970/WhatsApp%20Image%202025-05-08%20at%2011.32.51_39bbe225.jpg?Expires=1841292813&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vAu4CqfxBnPPpPaZoZDQow4OWc0onfMojLJX7nty23JvhQeQxcbBTQUFR3XYOCoHVOC7u-th8Hq3OKQfXorrCO7M3uHdqIapvMhVPcYs33wycjOmVDrTOYX~ZnF8yfMBaXsSUrKMgZqbRWCn2VTXHptDmpEFy6tC~dMgDP-UpR8huAknrsADnEknYkZ3nL78hbOfQxnP2slMkyGop4gNjNn9rnMnjJYIT9DL~8v1s80nxhI5~kO-DrXl1ULFZMJO7K6YRMAxjYa4dGW~tCcxPZJeL1VZ4eLw4aBvgiNe5yQ351Wf6vGms44Gcf-Hm7VVCduqt3gPs~h4fUBF4jGmEQ__",  },
  ],
};

const TechStackSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-950">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We leverage cutting-edge technologies to deliver exceptional digital experiences that are both beautiful and functional.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md backdrop-blur-sm bg-purple-50/80 shadow-sm">
              <TabsTrigger value="frontend" className="flex items-center gap-2 py-3">
                <Code size={18} />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2 py-3">
                <Server size={18} />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2 py-3">
                <Palette size={18} />
                <span className="hidden sm:inline">Design</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-4">
            {["frontend", "backend", "design"].map(category => (
              <TabsContent key={category} value={category} className="mt-0">
                <Card className="border border-gray-100 shadow-md bg-white/70 backdrop-blur-lg">
                  <CardHeader className="pb-2">
                    <CardTitle>
                      {category.charAt(0).toUpperCase() + category.slice(1)} {category === "design" ? "Tools" : "Technologies"}
                    </CardTitle>
                    <CardDescription>
                      {category === "frontend" && "Our frontend stack focuses on performance, aesthetics and user experience"}
                      {category === "backend" && "Powerful and scalable backend solutions for your digital products"}
                      {category === "design" && "Advanced design capabilities for stunning visual experiences"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                      {techStacks[category].slice(0, 10).map(tech => (
                        <div 
                          key={tech.name} 
                          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                        >
                          <div className="mb-3 text-primary">
                            <img
                              src={tech.image}
                              alt={tech.name}
                              className="h-14 w-14 object-contain"
                            />
                          </div>
                          <span className="font-medium text-gray-800 mb-1">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;