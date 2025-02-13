import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ITMOvnteam",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/itmovnteam.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Pricing", link: "/pages/pricing/pricing" },
      { text: "Guides", link: "/pages/intro/intro" },
    ],

    sidebar: [
      {
        text: "Intro",
        items: [
          { text: "Giới thiệu chung", link: "/pages/intro/intro" },
          // { text: "Thông tin quan trọng khác", link: "/pages/intro/other" },
        ],
      },
      {
        text: "Hướng dẫn sử dụng",
        items: [
          { text: "Đăng kí & Sử dụng", link: "/pages/guide/regiter" },
          {
            text: "Theo dõi status các models",
            link: "/pages/guide/modelstatus",
          },
        ],
      },
      {
        text: "Pricing",
        items: [
          { text: "Bảng giá model", link: "/pages/pricing/pricing" },
          {
            text: "Nạp tiền và theo dõi số dư",
            link: "/pages/pricing/recharged",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "telegram", link: "https://t.me/vpnitmovnteam" }],

    footer: {
      copyright: "Copyright © 2025 | ITMOvnteam",
    },

    search: {
      provider: "local",
    },
  },
});
