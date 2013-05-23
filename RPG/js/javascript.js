	function swapMusic(nr)
	{
		document.getElementById('id_mus_pla').src='music/music'+nr+'.mp3';
	}


	function swapPicZone(nr, zone)
	{
		var source_temp=document.getElementById('id_img_men_rig').src;
		var source_temp2=document.getElementById('id_img_men_cen').src;

		document.getElementById('id_img_men_rig').src='img/men_rig/img_men_rig_'+nr+'.png';
		document.getElementById('id_img_men_cen').src='img/men_cen/img_men_cen_'+nr+'.png';

		zone.onclick=function()
		{
			document.getElementById('id_img_men_rig').src='img/men_rig/img_men_rig_s00.png';
			document.getElementById('id_img_men_cen').src='img/men_cen/img_men_cen_'+nr+'.png';
			document.getElementById('id_img_inf_sta').src='img/inf_sta/img_inf_sta_'+nr+'.png';
			document.getElementById('id_img_inf_inv').src='img/inf_inv/img_inf_inv_'+nr+'.png';
			document.getElementById('id_img_inf_que').src='img/inf_que/img_inf_que_'+nr+'.png';
			document.getElementById('id_img_inf_map').src='img/inf_map/img_inf_map_'+nr+'.png';

			source_temp2=document.getElementById('id_img_men_cen').src;
		}

		zone.onmouseout=function()
		{
			document.getElementById('id_img_men_rig').src=source_temp;
			document.getElementById('id_img_men_cen').src=source_temp2;
		}
	}



	var id;
	var xhr = new XMLHttpRequest();
	xhr.onload = requete;


	function requete() 
	{
		document.getElementById(id).innerHTML=this.responseText;
	};


	function update(area, content)
	{
		id=area;
		xhr.open("get", "contenu/" + content + ".htm", true);
		xhr.send();
	}
