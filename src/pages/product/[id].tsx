import { useRouter } from "next/router"

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias accusantium quidem ratione enim, sapiente deserunt similique ea perferendis vel quisquam impedit natus sequi omnis consequatur animi quod incidunt iusto.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
