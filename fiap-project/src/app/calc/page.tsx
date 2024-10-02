import Image from "next/image";

export default function Home() {
	return (
		<div className="px-8 flex flex-col gap-2">
			<h1 className="text-4xl font-bold">Cálculo Planeta Vênus</h1>
			<p>
				Velikovsky especulou que o planeta Vênus foi ejetado como uma espécie de
				cometa a partir de Júpiter. Essa trajetória errática teria levado Vênus
				a passar perto da Terra em dois momentos importantes, causando caos nas
				órbitas dos planetas.
			</p>
			<Image
				src="/img/1506/eso1520aMedusaS.jpg"
				alt="nasa"
				width={300}
				height={300}
				className="rounded-xl"
			/>
		</div>
	);
}
