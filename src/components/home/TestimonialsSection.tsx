
import { TestimonialsSection } from "@/components/ui/testimonials-section";

const testimonials = [
  {
    author: {
      name: "Irshad Khan",
      handle: "@irshadk",
      avatar: "https://media-hosting.imagekit.io/32281fdfab3e4838/WhatsApp%20Image%202025-05-08%20at%2015.37.08_85d27a5c.jpg?Expires=1841306853&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fuD5ty7CskWKTOBEAlFuFO2yk8aEQF4pErk4KRH44Dirwp~BbRIKfIKPEYn7e7sEPqKbOf2hbig~0vB1JnkwHOxSjL3Imx6zKejRBBhPV1-~BcVZdTQApYHHV5ePF9QhbXT6cTvCREySgHUts85FniSCdo4kwPw9TtjnK2eWIUpcB8~sXbMElM~9A2M3JD2eacEi1V4pR3AxGT4AzVTxCx8wp9eEVACc8wwMCr1ibBov4a7HiHgLUNpk7JpskNOkn5r77pR6zLbgSmnZw-jkFUEDvFNCrZf3zxHKlmtQGg5-~qbVZJLQqj6FRJsnShUqPc1wNsUVa5WsOhGoGiSbuQ__"
    },
    text: "Zynlogic transformed our outdated website into a stunning, high-performance platform. Our engagement rates skyrocketed, and the site finally reflects our brand’s true potential. They nailed every detail — highly recommend!",
  
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://media-hosting.imagekit.io/551790f6c98841fa/WhatsApp%20Image%202025-05-08%20at%2015.37.26_1e7e0b96.jpg?Expires=1841306904&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fpSI8EHIEmj-Wg-oHkRBxox1nuC05jGsq4ijptaGPuPRoNDubfHyTyn62-ezmTFytfjjh1DVSytvTu1ePA04SFsQ54JCO-XnvO1RcKO744qYmH3XGrucnY7BCM099-9-nONhoMXUcMCP0oAmVSJDx1FLJp407ZEBv-YEXsRbWhM9lifh~wm~6ejIhGlUUl8NLNj7itrIFZXRJ~rmMQCo4oAcBZaSouCXafWBHbi9xr-W~YOoyxfgjNyVStREW48YPz6yk5YDeAx9tWzAtnEwsMbpKXt~ecK4PIhtQVeD3glDBi65XWZ~qPmz3u0dYaKNLWWoi~zQkcWXgOnVq7u2Lg__"
    },
    text: "Zynlogic completely transformed our online presence. The new website is fast, mobile-friendly, and exactly what we envisioned. Their team was responsive and delivered on time. Highly recommended!",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Neha ",
      handle: "@nehaS",
      avatar: "https://media-hosting.imagekit.io/9573291f3fc0446e/WhatsApp%20Image%202025-05-08%20at%2015.37.57_ea02571d.jpg?Expires=1841306953&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QHbcmNMeP7OOvVYlQdYcBFjI6q13AzS9Nt6FJb~SBSTCSIE3voQNwBFPOkzMdSzTB2Vqia87gnTeMEw~xsaHU0QBh7I~BTsblN6SDObAPyOKk5Avlwslb1BV3Q6bN9qKaaaPotL0I21hk2gGYYpSAgrhUBoqipC4fSRX-d5WjWJgFD6GUU40FJOLy40KnUi3DNuAWuXdSwNCERecvj3EGGHJm4B4FPuyrtt-6dg3yCYqym2Jgz-e8XfSxxiw2jLv7UvYRLfILU1feCTUuzKqsQ040WYVsEGvBQMhd2CG1t94WZpy4GhlcHFIQ4AnUkOX-gyJZ4iEhmz~qxmQPVJmUw__"
    },
    text: "The app Zynlogic built for us has been a game-changer. It's clean, intuitive, and bug-free. Their team went above and beyond during testing and iterations. Great experience overall."
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://media-hosting.imagekit.io/a7a56e1883a64eef/WhatsApp%20Image%202025-05-08%20at%2015.36.02_2d706451.jpg?Expires=1841306810&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kG043BHn1B8Y7iOErruwOeE6pEKp9~Qn-0WnHH9rqt8L58hUp8LmjFwj--4rs118dJXlCNRX2Ms5LzK57H~onNQYi48gASjS8ZpZsTDl-BTcdn84mhDx6vCKnQfArv0DsDRxaZmYb53GWyXozf-FXdkiCCgJbH98aTw34e3WvzeGhPlKM5GzO54JyacHDvWuXzRcTsmSILImdZbBHCMKS9oyRhNtfc-i9lXjQlNTMN4PTGl-jv~XwsNYPD93riFEBfvlBmrSZlModr5dFLFdEqZzh1yPkAwHm4pkY4DLWEABBPwygEyD8XjZdi-1hqzu5GPNdDLOB5TH6isgQBsC9Q__"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  },
  {
    author: {
      name: "Sameer Kulkarni",
      handle: "@kulkarni",
      avatar: "https://media-hosting.imagekit.io/0dff2757aea8404e/WhatsApp%20Image%202025-05-08%20at%2015.35.24_a10461f2.jpg?Expires=1841306737&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=z3OADhyxfPY~9ZM7YHzuGNuBVIBRe0Sni4x1MgHPprRP5~QqCKAbO2TshysyvcQLJ3Qz7E0LgoVNQTL5HxAyj5wucLhyLdTpeCUuAzmT4VPcuSMkUaVz7Mp4fN2mWQe-BsgMJvwz6fviO9UxMrPLzrznUHukdYpguMnLwiSD50oKKPh~li9Zl9WKplLgyrYvnh2bIShWuX4hPujCzyQwste8-2PRUDZdPl9I~ZdgNNAZJLf9625l8iWVcFNZhWuEGjr3wpj8P8M2KnVEOfDcdHkBjgFewop6g6iK8Pu1uj6Hkc2Qmf69onHJw3eW6bgHCgM1~oPzMT6wdU-mhR7mXw__"
    },
    text: "We needed complex API integration with some AI features like chatbot support and Zynlogic delivered it seamlessly. Their tech knowledge is solid and they handled everything with clarity and confidence"
  },
  {
    author: {
      name: "Priya Deshmukh",
      handle: "@pDeshmukh",
      avatar: "https://media-hosting.imagekit.io/7a1352bb9ed348c0/WhatsApp%20Image%202025-05-08%20at%2015.38.50_ea515c50.jpg?Expires=1841307013&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ubdRod2Mo3evvqn48bl~f5G9570NYwL63WZo~W4frTso0h7Pv0RzwCtNpocy4jNlPfMdYqoph5lKX1WYMEXYq8UyoOcjQmpdhpy5MLdjFtXRjdc1re8teN9NupF4ADYRZ3OcktjTKThb-St6clhI8wHTGyPuDIkgYXKO6LgyzXqYP0glZ~Jgl~5-Gq8q1ApR8ckblGlqW9xYQipUDKDXHs0kI93UjFeRw67Scr-6ZeERMP3d3~XtBQ09VRQ8AjDrBrVru2br1hHM6MBldi-WDQ5nhhYrJVfLuQFFJ5E3Eem2D-2fP~-kwh1XIkJS8nQjPGBFEqQlAtKTJpbwSjbOPg__"
    },
    text: "We saw a 70% increase in leads after Zynlogic took over our digital marketing. Their team’s strategy, ad creatives, and analytics work was very impressive. Value for money."
  }
];

const HomeTestimonialsSection = () => {
  return (
    <TestimonialsSection
      title="Trusted by 10+ countries"
      description="Hundreds of organizations have entrusted Zynlogic to successfully execute and deliver their critical projects."
      testimonials={testimonials}
    />
  );

};

export default HomeTestimonialsSection;
