<?php
	$path = "cardapios/"; 
	$diretorio = dir($path); 
	echo "Lista de Arquivos do diretório '<strong>".$path."</strong>':<br />"; 

		$arquivos = "templates/home.phtml"; // nome do arquivo gerado 
		$ponteiro = fopen($arquivos, "w");	
		fwrite($ponteiro,"");
				$texto="[";
	while($arquivo = $diretorio -> read()){ 
		echo "<a href='".$path.$arquivo."'>".$arquivo."</a><br />"; 
		    //Criando a url para o aquivo json
    $jsonurl =$path.$arquivo;

    //Retorna o conteudo do arquivo em formato de string
    $json = file_get_contents($jsonurl);


    //Decodificando a string e criando o json
    $json_output = json_decode($json);


		$texto.='{"namespace":"'.$json_output->namespace.
			'","titulo":"'.$json_output->titulo.
			'","cidade":"'.$json_output->cidade.
		'"},';
    echo "<a href='http://www.guiadodia.com.br/#/app/cardapio/".$json_output->namespace."'>".$json_output->titulo."</a>";
    echo $json_output->namespace;
} 
		$texto.='{"namespace":"final","titulo":"final"}]';
		fwrite($ponteiro, $texto);
$diretorio -> close();
echo $texto;


/*
$arquivo = "localcardapio.php";
$dataarquivo = file_get_contents("localcardapio.php");


$ponteiro = fopen($arquivo, "w");	
		fwrite($ponteiro,"");
		$texto='{"cardapios":';
		$texto.=$data;
		$texto.='}';

 fwrite($ponteiro, $texto);	*/	

?>