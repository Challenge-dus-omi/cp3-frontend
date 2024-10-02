import Image from "next/image";

export default function Home() {
	return (
		<div className="px-8 flex flex-col gap-2">
			<div>
				<h1 className="text-4xl font-bold">
					Teoria 3 - Reversão dos Polos Magnéticos
				</h1>
				<p>
					Outra hipótese proposta por Velikovsky é que essas interações entre
					planetas poderiam ter causado a reversão dos polos magnéticos da
					Terra. Ele sugeriu que a aproximação de Vênus e Marte gerou forças
					gravitacionais tão intensas que fizeram o eixo da Terra inclinar-se
					drasticamente, levando à inversão dos polos. Ele tentou conectar essa
					ideia a eventos geológicos e climáticos drásticos descritos em
					histórias antigas.
				</p>
			</div>
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
