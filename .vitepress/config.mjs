import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MultiAppAI",
  description: "MultiAppAI - ITMOvnteam",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/icons/itmovnteam.svg" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icons/itmovnteam.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Pricing", link: "/pages/pricing/pricing" },
      { text: "Guides", link: "/pages/intro/intro" },
    ],

    sidebar: [
      {
        text: "Intro",
        items: [
          { text: "Giới thiệu chung & Contacts", link: "/pages/intro/intro" },
        ],
      },
      {
        text: "Hướng dẫn sử dụng",
        items: [
          { text: "Đăng kí & Hướng dẫn Sử dụng", link: "/pages/guide/register" },
          {
            text: "Theo dõi trạng thái hoạt động",
            link: "/pages/guide/modelstatus",
          },
        ],
      },
      {
        text: "Pricing",
        items: [
          { text: "Chi phí & Bảng giá model", link: "/pages/pricing/pricing" },
          {
            text: "Theo dõi TK & Nạp tiền",
            link: "/pages/pricing/recharged",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "telegram", link: "https://t.me/multiappai_itmovnteam" },
    ],

    footer: {
      copyright: "Copyright © 2025 | ITMOvnteam",
    },

    search: {
      provider: "local",
    },
  },
});
