Get started with the project by running the following command:

```bash
npm install
```

```bash
npm run docs:dev
```

This will start the development server and open the documentation in your default browser.

---

To create link to a external html file, you can use the following syntax:

```md
[Link to pure.html](/test.html){target="\_self"}
```

file html should put into **public/** folder.

---

To change logo, you can put the logo image into **public/icons** folder and change the logo path in **.vitepress/config.mjs** file.

```js
logo: "/icons/itmovnteam.svg",
```
