# Lorem Ipsum eCommerce

## Project to practice eCommerce with MercadoPago.

Demo:
[https://lorem-ecommerce-sylphid.vercel.app/](https://lorem-ecommerce-sylphid.vercel.app/)

_Not finished yet, missing profile route._

## Backend

[LoremBackend](https://github.com/SylphidZoul/LoremBackend)

## Knowed bugs:

* Payment Status landing page not loading properly after being redirected from MercadoPago's checkout.
* First visit of the hour may need reload to wait the backend hosted on Heroku to start.
* Facebook login won't work without Privacy Policy URL.

## Tools: 

* [react](https://es.reactjs.org/)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-helmet](https://www.npmjs.com/package/react-helmet)
* [react-facebook-login](https://www.npmjs.com/package/react-facebook-login)
* [react-google-login](https://www.npmjs.com/package/react-google-login)
* [styled-components](https://www.npmjs.com/package/styled-components)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [query-string](https://www.npmjs.com/package/query-string)
* [standard](https://standardjs.com/) - linter.
* [vercel](https://vercel.com/) - deploy.
* [@meronex/icons](https://icons.meronex.com/) - a react-icons's fork fixing a strange bug on some CRA versions that causes a 500kb~ download of all icons on the client even if your are not using them.
