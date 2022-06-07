import ProductListings from "@/components/ProductListings";

const products = [
  {
    _id: "629f4f6c7dce2bd5b4b1a59a",
    picture: "http://placehold.it/32x32",
    title: "Joy Wilkinson",
    description:
      "Incididunt pariatur cupidatat tempor et ut est Lorem ea. Deserunt exercitation aute est amet ipsum. Eiusmod duis esse laboris consectetur. Nostrud occaecat fugiat non laboris cillum anim dolor deserunt tempor amet mollit nulla exercitation excepteur.\r\n",
  },
  {
    _id: "629f4f6caf57f37d0cc8865f",
    picture: "http://placehold.it/32x32",
    title: "Maldonado Villarreal",
    description:
      "Voluptate sint anim et aliquip ut exercitation ut laborum qui mollit non pariatur. Magna magna magna laboris ea incididunt nostrud consequat irure culpa fugiat excepteur ea laboris. Adipisicing ex cillum nostrud labore enim do voluptate exercitation proident commodo deserunt ea minim.\r\n",
  },
  {
    _id: "629f4f6c22b7e0258db2ea62",
    picture: "http://placehold.it/32x32",
    title: "Katie White",
    description:
      "Cupidatat laborum aliqua veniam quis ipsum enim id ipsum sint in deserunt. Magna in et aliquip ea ut. Aliquip nisi nostrud culpa dolor dolore culpa qui. Labore qui nisi incididunt ad id esse veniam magna magna dolor ad amet aliquip aliquip. Laboris culpa veniam aliquip adipisicing nulla culpa esse anim sint id amet. Id exercitation do reprehenderit fugiat voluptate excepteur nisi labore culpa laboris ipsum in.\r\n",
  },
  {
    _id: "629f4f6c031b640dce1f91d3",
    picture: "http://placehold.it/32x32",
    title: "Cassandra Castaneda",
    description:
      "Irure ea irure officia occaecat irure dolore dolore cillum voluptate ea. Pariatur laborum ad ea ullamco in do qui adipisicing ullamco ut aute sint in labore. Nisi culpa tempor laboris duis exercitation ea. Amet minim qui commodo eiusmod minim quis do. Est elit nostrud sit eu reprehenderit officia nisi voluptate ea qui nulla. Officia fugiat nostrud nisi pariatur consectetur proident duis culpa ex Lorem ut consequat aliqua eu. Consectetur cupidatat excepteur amet ullamco.\r\n",
  },
  {
    _id: "629f4f6cbf9ecc14524511b7",
    picture: "http://placehold.it/32x32",
    title: "Dianne Whitehead",
    description:
      "Quis proident elit cupidatat exercitation elit irure. Labore ex magna irure enim ex do nostrud labore id nulla minim. Esse laboris excepteur veniam velit. Culpa deserunt laboris occaecat et amet sint. Dolore aliquip reprehenderit adipisicing non est laborum. Minim commodo sunt qui excepteur exercitation consequat et. Consectetur aliqua eiusmod dolor consequat eu voluptate exercitation eiusmod ex in.\r\n",
  },
  {
    _id: "629f4f6c7c09dc6811807837",
    picture: "http://placehold.it/32x32",
    title: "Prince Huff",
    description:
      "Nostrud tempor in commodo tempor fugiat do do. Nisi laboris ullamco velit aute irure. Excepteur Lorem aliquip magna aliquip ipsum proident elit qui labore officia amet.\r\n",
  },
];

export default function Home() {
  return (
    <div>
      <ProductListings products={products} />
    </div>
  );
}
