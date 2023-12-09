import Category from "@/app/components/home/Category";
import Banner from "@/app/components/home/Banner";
import Products from "@/app/components/home/Products";
import PageContainer from "@/app/components/containers/PageContainer";

export default function Home() {
  return (
      <PageContainer>
            <Category />
            {/*<Banner />*/}
            <Products />
      </PageContainer>
  )
}
