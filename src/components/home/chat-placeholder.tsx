import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
	return (
		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
			<div className='flex flex-col items-center w-full justify-center p-40 gap-4 '>
				<Image src={"/desktop-hero.png"} alt='Hero' width={320} height={188} />
				
				<p className='text-3xl font-extralight mt-5 mb-2'>Bienvenido a Ajax Horizon</p>
				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground'>
				conversa con tus compañeros, envía imágenes para aclarar ideas, organiza reuniones para alinear al equipo y usa la IA para asistencia instantánea.
				</p>

			</div>
			<p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
				<Lock size={10} /> Tus mensajes personales están cifrados de extremo a extremo
			</p>
		</div>
	);
};
export default ChatPlaceHolder;