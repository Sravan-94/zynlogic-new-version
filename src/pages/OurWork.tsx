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
  project7: "https://media-hosting.imagekit.io/e1adb132f174409c/WhatsApp%20Image%202025-05-05%20at%2017.27.22_3a4645bd.jpg",
  project8: "https://media-hosting.imagekit.io/964f24a102a54989/WhatsApp%20Image%202025-05-05%20at%2017.15.05_c644755d.jpg",
  project9: "https://media-hosting.imagekit.io/942627dc3a9a4ac9/WhatsApp%20Image%202025-05-05%20at%2020.27.04_e45d455b.jpg",
  project10: "https://media-hosting.imagekit.io/e2d48f456e9e4dac/WhatsApp%20Image%202025-05-05%20at%2017.37.15_1768e148.jpg",
  project11: "https://media-hosting.imagekit.io/d33b2576b46c4fe0/WhatsApp%20Image%202025-05-05%20at%2017.27.23_f0fb89ab.jpg",
  project12: "https://media-hosting.imagekit.io/1d396a25b11e4984/WhatsApp%20Image%202025-05-05%20at%2020.26.36_48c9054b.jpg",
  project13: "https://media-hosting.imagekit.io/fe31d2bbeb7249fa/WhatsApp%20Image%202025-05-05%20at%2020.27.08_3162a3c5.jpg",
  project14: "https://media-hosting.imagekit.io/2d72900b96a5410d/WhatsApp%20Image%202025-05-05%20at%2017.29.51_2d914035.jpg",
  project15: "https://media-hosting.imagekit.io/49e933e5d78f4c0b/WhatsApp%20Image%202025-05-05%20at%2017.37.08_4b8320c0.jpg",
  project16: "https://media-hosting.imagekit.io/f685e0cd160a4064/WhatsApp%20Image%202025-05-05%20at%2017.29.54_cd957daf.jpg",
  project17: "https://media-hosting.imagekit.io/56b3b334f76748a9/WhatsApp%20Image%202025-05-05%20at%2017.37.08_54c80f6c.jpg",
  project18: "https://media-hosting.imagekit.io/9158e1b950464c74/WhatsApp%20Image%202025-05-05%20at%2017.29.54_21fd7ddd.jpg",
  project19: "https://media-hosting.imagekit.io/20e29cbdac5a478f/WhatsApp%20Image%202025-05-05%20at%2020.27.05_f00e979e.jpg",
  project20: "https://media-hosting.imagekit.io/04d88a578f63459b/WhatsApp%20Image%202025-05-05%20at%2018.07.17_32a7341a.jpg",
  
  // Project 21-40 images (reusing the same images for now, you can replace these with different images)
  project21: "https://media-hosting.imagekit.io/7ab5c2dacaf8465e/WhatsApp%20Image%202025-05-05%20at%2020.27.10_6714b0fd.jpg?Expires=1841392546&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JcNCoopV2q4MexkH97f-r5-kYsMRKPDs4CaR5~B3b1o27Kba-wOVQlo~PD1o4TnM0IZGZBnSvC5wy6kiTtNpRvRIHiRbyDcfVAml-DmyjzLfjoF04W6kcu2CPtL7svYeMjMUpfXpSnGzTHjnq0~wRkZXSIIyhPVXajsTDcWfeGRao3fkKUAiuFiUUbMrbfXR5dAWjWdzSCxjJGYAN9SQW42Z9Jex33MaF1jqjvYXzr30NebFsS5c5KfJUEi6dIhdrOdWX~M02iojNfI-zi8Q6zzYs-bmooFXq1GQSrp3oBcL57raCJwgEUxsibLBirTyT8Oi9DwEsfbx5T1ngylN4Q__",
  project22: "https://media-hosting.imagekit.io/fff3fd4ead144d2b/WhatsApp%20Image%202025-05-05%20at%2020.27.12_77247ef7.jpg?Expires=1841392570&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g2ULY6iCYixB0iATf7oqMwb~PzOItWSe4hBN6KyRcDswG6YU60HFsM0v0UqWf4pEbUJvWE5PyrsgA3qybodcVlTZ7ip~72enAD9MXeDnowOCXUhIW4WPK~7EMmGGjPaALF4HiZ5rmQvXzLq8~zgdWj8IhxNWqUksmcy-PPM28J3Zrt1uwhGCUk2U12ZPDf4QTAKuujb5llp6Ul7u-sF2o2vlN5cqjdBJa8HXpaaKMgqZ5nujxwsof2rxdz34S87vNlhnlOnUpNqwzacQ1CHvhe2COPhDh0Iqd2CCNPlZkI3KAJGKXP58DMdcTDhhU2qzpvc5C9OgmpEbwxol-RQ2Fg__",
  project23: "https://media-hosting.imagekit.io/65b2b5daf2e04f32/WhatsApp%20Image%202025-05-05%20at%2018.17.23_f45317c9.jpg?Expires=1841391996&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q9T4-6~aGsLG-JfEuje5xuQuapInS0GglIo5LNzVP6MwIELWHAv~lCSBCcxz11VhdsVtmPCeES5PVwT9-VC6dyQX2G5EmQivpBnqiHWZ3XS6PJ6ZU9gaUtzwQXIaJNwGIV1~KAr7BbD5LpgzzMDisvWOKEm7CBSKHrPjrWP1tqVd7kO4Hdm8xHZWhhF3I~mwqJarqCCXYe0Kd1X1KB0mS0xiJcg2avLHwDBxhveFMvVquKudRF-nbdXEymkbbMPb3AInbi3zHPWuL1EiEdSylOo3w6nBitxtYsgdyqGQmREzJR-HzQAQEn-Klx4spwT40YkwltUTKwfRIhWTfF4C7w__",
  project24: "https://media-hosting.imagekit.io/2bdb2eaba9314bc1/WhatsApp%20Image%202025-05-05%20at%2017.27.25_f87c9d53.jpg?Expires=1841392043&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kedX~OqfMxOympu74LXcG6GHR~wZuDZpRBcQUuMW~mHhWYhzUI3QbBWkz7A2srj9tbuUjPWtZEryr~kKJIigewxG27q~HoTDCaJrT6ER0ka5n7qlhEYhVQG22yltQUd2t44r1bwIJEJ053pXcatPmnyTY4Tujs4Hjobm3ra1YGMTfZhotiv0W71rAPzomDncK9BQVL7ylyjpnBJUt4qvvWd5hR3cs-uSX46lCPX1lujdrw9--n21Jhu6AGa~JjSvrr8iUeE2idj-Bj2qKR9DhvejtaYmEv0cHRDWd~3YX9V8UfDx47I8uobTycpPKWyOAbB8h4UM5YuJzVxm-0Yicw__",
  project25: "https://media-hosting.imagekit.io/9c8607d8375a4f55/WhatsApp%20Image%202025-05-05%20at%2018.07.19_59df7558.jpg?Expires=1841392257&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FaCXfwayQHEOBsV1N-eyIF2O7UiBJXFeJERSchxE3jltVAulkl~YvLbKPSe7aHScO2-3btVw0ApHv8W3lA90vx7yTXp3Z1YW~5M7yhCzPX93yABL2eCr9d9HqtX5Mor6HUMHfJx4ySLxq2mA8K4neAHLx3Snj9tese1oEGZ96OcwFedNWg22-ZExps885sta8V-cGRUWN7MgKn5EQm1qqQR1whpIEzM2wctKwzNB3ii~qsu1u5tt~r9vBX6W~LLdaqXnTYfxvQTbKfBY1VN6rH6-EnkHJt0YeCy4LTqvMMAO9Ggpazymb3pdsfGaB4NYoCEITHQLqtGkCQLkN3Wy5g__",
  project26: "https://media-hosting.imagekit.io/6fcfb7daec10440b/WhatsApp%20Image%202025-05-05%20at%2020.27.07_d8c5b4ca.jpg?Expires=1841392348&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XmDe~ZEgj0vHtiEzpf-IaKIv0KxzNwySDuTr89hL3pJsg5zSYba4tJt5rd2ANmclOWk-~~jba2~CvAqamt6MiudvBRHtdb6afqKBkR5UXS5WPLiT30r13EknSBzpDaK98McEem6viBMTKUhSbHZgiFbuCkQQF5VA47xHoMLh-GqUY4jozRMnvNduQNOZKERxft~qmZTxT4Ayy5dV1MbrnsFFLKhuCcR6QM1exYUsZvQ9PRsuy4EtJ8PHG7n-0KmF7hk~ju-j0wlszE7yd8d57FBy6NGK2y4E~MKVDTUyaTKxfbnEoZDy3AVWurImU2WEbjbB8Qp1~9meiX5zfHztjA__",
  project27: "https://media-hosting.imagekit.io/2d83437c09034324/WhatsApp%20Image%202025-05-05%20at%2020.27.11_e0d09124.jpg?Expires=1841392733&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=plIHini2PKHWUXWAKvCNW4xX42Qa8GlviaILp7NgsBnKrBxZFTuji2F-OK4eZ5Y5SGavb4Z9RhI4Wi-5v94s19BZ4idcT43OVydhaPikBQkltSTU0prt5rUcpk4FrReCGEHriGD~NCCNwSqWf2pj4HZ8n5B8QV9prx0ThywKcda~AsKMFHeTK~TAjl41MRDbqqbwCE8gqhPiQuEjCYQthbvT6BErzwYhIWuhqIoBbDazIq4qxygNo9OU0T8p~~f5oZLZjAgtKIw0w0VRFQ5V07sHyGel7vgHLiqLeUkSXii3IwJh-E5u5bGIYgd4fn7rzRRIZxyaVadAozRYgXxp3A__",
  project28: "https://media-hosting.imagekit.io/69106931396b4338/WhatsApp%20Image%202025-05-05%20at%2018.22.02_7a48302d.jpg?Expires=1841392764&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mGJv27QjCTb-q9QZwQ6BV1cxS4YBU2GjsOhfbu7lLoLSbupEcA-C-6-e14fhuwIX9ugXB9~NEf6gyU7kKJxhVN1vq9JbsbPfVwwE7cKmEutuPhezarmINyiHmL~Y4VfBWC54o9jJApsVbjKbnAsEdUTk0S63l3IEgq9S~h3wCoXSxHrOsKpd-MoiYRpXYfpJi~BW6Zz6O21If-HA7Mm6pHPZOHXXGjCxg89~0UwRukV9IATolwE0MRLb4uuqQS-vFFbuIw3Ui1mv14Q~u2-AUmAqQQIbManYJGCzr0CgG-J97Mu~sVKz9dw7e3LxSmX44mzw-WvNfg20rTitVeBqMg__",
  project29: "https://media-hosting.imagekit.io/942627dc3a9a4ac9/WhatsApp%20Image%202025-05-05%20at%2020.27.04_e45d455b.jpg",
  project30: "https://media-hosting.imagekit.io/e2d48f456e9e4dac/WhatsApp%20Image%202025-05-05%20at%2017.37.15_1768e148.jpg",
  project31: "https://media-hosting.imagekit.io/d33b2576b46c4fe0/WhatsApp%20Image%202025-05-05%20at%2017.27.23_f0fb89ab.jpg",
  project32: "https://media-hosting.imagekit.io/1d396a25b11e4984/WhatsApp%20Image%202025-05-05%20at%2020.26.36_48c9054b.jpg",
  project33: "https://media-hosting.imagekit.io/fe31d2bbeb7249fa/WhatsApp%20Image%202025-05-05%20at%2020.27.08_3162a3c5.jpg",
  project34: "https://media-hosting.imagekit.io/2d72900b96a5410d/WhatsApp%20Image%202025-05-05%20at%2017.29.51_2d914035.jpg",
  project35: "https://media-hosting.imagekit.io/49e933e5d78f4c0b/WhatsApp%20Image%202025-05-05%20at%2017.37.08_4b8320c0.jpg",
  project36: "https://media-hosting.imagekit.io/f685e0cd160a4064/WhatsApp%20Image%202025-05-05%20at%2017.29.54_cd957daf.jpg",
  project37: "https://media-hosting.imagekit.io/56b3b334f76748a9/WhatsApp%20Image%202025-05-05%20at%2017.37.08_54c80f6c.jpg",
  project38: "https://media-hosting.imagekit.io/9158e1b950464c74/WhatsApp%20Image%202025-05-05%20at%2017.29.54_21fd7ddd.jpg",
  project39: "https://media-hosting.imagekit.io/20e29cbdac5a478f/WhatsApp%20Image%202025-05-05%20at%2020.27.05_f00e979e.jpg",
  project40: "https://media-hosting.imagekit.io/04d88a578f63459b/WhatsApp%20Image%202025-05-05%20at%2018.07.17_32a7341a.jpg",
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
