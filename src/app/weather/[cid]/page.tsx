export default function CampWeatherPage({ params }: { params: { cid: string } }) {
  return (
    <main>
      {params.cid}
    </main>
  );
}
