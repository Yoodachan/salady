const query_string = new URLSearchParams(window.location.search);
const q_id = query_string.get('id');
const q_cate = query_string.get('p_cate');

const title_img = document.getElementsByClassName('detail_title_box')[0];
const detail_title = document.getElementsByClassName('detail_title')[0];
const cate_warm = document.getElementsByClassName('cate_warm')[0];
const cate_salady = document.getElementsByClassName('cate_salady')[0];
const cate_sand = document.getElementsByClassName('cate_sand')[0];
const cate_wrap = document.getElementsByClassName('cate_wrap')[0];


function cate () {
	if (q_cate == 'salady' ) {
		title_img.style.backgroundImage = "url(./images/list_title_img_001.png)";
		detail_title.innerHTML = "누구나 맛있게 즐길 수 있도록 <br> 국내산 프리미엄 채소로만 구성된 샐러디"
		cate_salady.classList.remove('cate_item')
		cate_salady.classList.add('cate_select')
	}
	if (q_cate == 'warm_bowl' ) {
		title_img.style.backgroundImage = "url(./images/list_title_img_002.png)";
		detail_title.innerHTML = "신선한 채소 베이스 위에 따끈한 통곡물 밥이 더해져 <br> 더욱 든든하게 즐길 수 있는 웜볼"
		cate_warm.classList.remove('cate_item')
		cate_warm.classList.add('cate_select')
	}
	if ( (q_cate == 'wrap') || (q_cate == 'sand')) {
		title_img.style.backgroundImage = "url(./images/list_title_img_003.png)";
		detail_title.innerHTML = "또띠아로 돌돌 말아낸 맛있고 간편한 랩/웜랩과 <br> 씹을수록 고소한 귀리번이 매력적인 샌드"
		if ( q_cate == 'wrap' ) {
			cate_wrap.classList.remove('cate_item')
			cate_wrap.classList.add('cate_select')
		}
		if ( q_cate == 'sand' ) {
			cate_sand.classList.remove('cate_item')
			cate_sand.classList.add('cate_select')
		}
	}
}
cate();



db.collection('menu/product/warmbol').doc(q_id).get().then((result)=>{
	var product_wrap = document.querySelector('.product_wrap')
	let content = document.createElement('div')
	content.classList.add('product_box');
	content.innerHTML = 
	`
		<div class="product_content">
			<strong class="prd_title"> ${result.data().p_name} </strong>
			<ul class="prd_semi_title">
				<li class="prd_global"> ${result.data().p_global} </li>
				<li class="prd_kcal"> ${result.data().p_kcal} Kcal </li>
			</ul>
			<div class="prd_info_box">
				<img src="${result.data().p_img}" class="prd_img" title=" ${result.data().p_name} " />
				<span class="prd_comment">${result.data().p_comment}</span>
			</div>
		</div>

		<div class="product_chart">
			<div class="chart_content">
				<div class="chart_title">영양성분표</div>

				<table class="chart_table">

					<tr class="chart_header_wrap">
						<th>메뉴</th>
						<th>열량(kcal)</th>
						<th>탄수화물(g)</th>
						<th>당류(g)</th>
						<th>단백질(g)</th>
						<th>지방(g)</th>
						<th>포화지방(g)</th>
						<th>나트륨(mg)</th>
					</tr>

					<tr class="chart_data_wrap">
						<td>${result.data().p_name}</td>
						<td>${result.data().p_kcal}</td>
						<td>${result.data().p_cal}</td>
						<td>${result.data().p_sugars}</td>
						<td>${result.data().p_protein}</td>
						<td>${result.data().p_fat}</td>
						<td>${result.data().p_sat}</td>
						<td>${result.data().p_mg}</td>
					</tr>

				</table>

			</div>
		</div>`
  product_wrap.append(content);
	console.log(result.data());
})