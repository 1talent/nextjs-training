<<<<<<< HEAD
# Next.js + Tailwind CSS + Shopify Starter

<div align="center">
<img src="https://github.com/btahir/next-shopify-starter/blob/main/public/images/demo-store.gif">
<p align="center">
  <a href="https://doggystickers.vercel.app/">Live Demo</a> •
  <a href="https://nextails.com/">See more starters</a> •
  <a href="https://twitter.com/deepwhitman">Follow me on Twitter</a>
</p>
</div>

This is a fully functional eCommerce store that uses Next.js + Tailwind CSS in the front end and leverages the Shopify Storefront API to interact with your Shopify backend. You can see a Live Demo [here](https://doggystickers.vercel.app/ "Shopify store").

We use GraphQL to query our Shopify data and store the cart information in localStorage to persist user session. Finally - we use Shopify Checkout to let the user
purchase the items. You can see this play out in the example store. Yes - the store is functional and you can buy the stickers. :smiley:

## High Performance

<table align="center">
  <thead>
    <tr>
      <td>Desktop</td>
      <td>Mobile</td>
    <tr>
  </thead>
  <tbody>
  <tr>
    <td valign="top"><img width="300" height="300" src="https://github.com/btahir/next-shopify-starter/blob/main/public/images/desktop-lighthouse.png"/></td>
    <td valign="top"><img width="300" height="300" src="https://github.com/btahir/next-shopify-starter/blob/main/public/images/mobile-lighthouse.png"/></td>
  </tr>
  </tbody>
</table>

## Mobile Responsive

<table align="center">
  <thead>
    <tr>
      <td>Listings</td>
      <td>Cart</td>
    <tr>
  </thead>
  <tbody>
  <tr>
    <td valign="top"><img width="300" height="300" src="https://github.com/btahir/next-shopify-starter/blob/main/public/images/responsive-main.gif"/></td>
    <td valign="top"><img width="300" height="300" src="https://github.com/btahir/next-shopify-starter/blob/main/public/images/responsive-cart.gif"/></td>
  </tr>
  </tbody>
</table>


## The Tech

* Next.js + Tailwind CSS
* GraphQL
* localStorage to persist user session
* Shopify
* Vercel
* Font Awesome Icons
* Josefin Sans Google Font

## How to use

By default, the store is set to query and show all products in one collection. 
You can extend this to query multiple collections or your whole store.

#### A note on pagination in the GraphQL queries

The graphQL queries are all hardcoded to pull the maximum number of products/variants/images which
is set to 250 by Shopify. I did this to keep things simple. Pagination would have made the queries complicated
and 250 items is enough for most use cases.

If you require pagination you will have to keep track of the [cursor](https://youtu.be/S37WsC8GzSA "graphql pagination") field and keep querying the data until you fetch all items.

### Setup Environment variables

Create a .env.local file in the root directory. You need to add these 4 variables:

```
NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN=
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_COLLECTION=
NEXT_PUBLIC_LOCAL_STORAGE_NAME=
```

The NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN and NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN (it will be something like DOMAIN_NAME.myshopify.com) are needed to access
the Shopify Storefront API (make sure you have set it up in your Shopify store. See [docs](https://shopify.dev/docs/storefront-api/getting-started "Shopify store") for more information.

NEXT_PUBLIC_SHOPIFY_COLLECTION is the name of the collection you want to pull in and NEXT_PUBLIC_LOCAL_STORAGE_NAME is the name of the key
your users will store their cart information under. The exact name isn't that important although I suggest you make it unique so
it is less likely to clash with other stored objects. Something like yourStoreNameShopifyStore where yourStoreName is your shopify store name will suffice.

### Installation

Change into the project directory and run the following command:

```
yarn && yarn dev
```

### Update Site Metadata

You can update your site metadata in the next.config.js file. 

```
env: {
  siteTitle: 'Your Company',
  siteDescription: 'Your company description.',
  siteKeywords: 'your company keywords',
  siteUrl: 'https://doggystickers.xyz',
  siteImagePreviewUrl: '/images/main.jpg',
  twitterHandle: '@your_handle'
} 
```

### Update Colors

You can update the color palette in tailwind.config.js file.

```
colors: {
  palette: {
    lighter: '',
    light: '',
    primary: '',
    dark: '',
  },
},
```
### Update Progressive Web App (PWA) data

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.

### Deployment

You can deploy this using any number of services. Vercel and Netlify are the ones I prefer and very easy to setup and sync with your Github repo.

### Credit

The store was inspired by the awesome [Gatsby Swag Store](https://github.com/gatsbyjs/store.gatsbyjs.org "gatsby store") as well
as countless other devs much more capable than me who put out their awesome work for free. 

### License

I have open sourced this code under the MIT License in the hope that if this helps people navigate their way around JAMStack eCommerce stores
as the Gatsby Swag Store did for me when I first started out.

### Buy Me Coffee! :coffee:

If you did find this useful and want to show your appreciation you can buy me a [coffee](https://www.buymeacoffee.com/neum "coffee") :smiley:

You can also buy some Doggy Stickers from the [store](https://doggystickers.vercel.app/ "store")! :dog:
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> f1ec3a1 (Initial commit from Create Next App)
