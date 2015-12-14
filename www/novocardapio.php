<?php
		$data = file_get_contents("php://input");
		$item = json_decode($data);
		$namespace = $item->namespace;

		$arquivo = "cardapios/".$namespace.".phtml"; // nome do arquivo gerado 

		$ponteiro = fopen($arquivo, "w");	
		fwrite($ponteiro,"");
		$texto="";
		$texto.='{"ordem":"'.$item->ordem.
		'","titulo":"'.$item->titulo.
		'","descricao":"'.$item->descricao.
		'","chamada":"'.$item->chamada.
		'","namespace":"'.$item->namespace.
		'","infoline":"'.$item->infoline.
		'","site":"'.$item->site.
		'","cidade":"'.$item->cidade.
		'","cep":"'.$item->cep.
		'","logradouro":"'.$item->logradouro.
		'","diferencial":"'.$item->diferencial.
		'","horario":"'.$item->horario.
		'","pagamento":"'.$item->pagamento.'",';
		$texto.='"categorias":[';
		foreach ( $item->categorias as $cid){
			$texto.='{"titulo":"'.$cid->titulo.'",';
			$texto.='"itens":[';
			foreach ( $cid->itensCategoria as $cid2){
				$texto.='{"id":"'.$cid2->idItemCategoria.'","titulo":"'.$cid2->titulo.'","valor":"'.$cid2->valor.'"';
					if($cid2->descricao!="") {
						$texto.=',"descricao":"'.$cid2->descricao.'"';
					}
					if($cid2->fotos){
						foreach($cid2->fotos as $fotos){
						$texto.=',"imagem":"'.$fotos->caminho.'"';	
						}
					
					}
				$texto.='},';
			}
			$texto.='{}]},';
		}
		$texto.='{}]}';
		
		fwrite($ponteiro, $texto);
