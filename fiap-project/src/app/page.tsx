import Image from "next/image";

export default function Home() {
	return (
		<div className="px-8 flex flex-col gap-2">
			<h1 className="text-4xl font-bold">
				Teoria 1 - A Ejeção de Vênus como Cometa
			</h1>
			<p>
				Velikovsky teorizou que Vênus não foi originalmente um planeta, mas sim
				um cometa que foi expelido de Júpiter. Ele argumentou que, em sua
				jornada para se estabilizar na órbita atual, Vênus passou perto da Terra
				em dois momentos históricos, causando perturbações significativas no
				planeta. Ele ligou esses eventos a relatos em textos antigos e
				mitologias, sugerindo que os cataclismos descritos eram causados por
				essa aproximação de Vênus.
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
