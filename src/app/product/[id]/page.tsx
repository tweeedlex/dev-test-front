interface ProductPageProps {
  params: {
    id: number;
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}