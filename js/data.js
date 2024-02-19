const $container=$('.gallery-wrap');
const $loadMoreBtn=$('.loadMoreBt');
let $addItemCount=3;
let $added=0;
let $allData=[];
let $filter=$('#gallery-filter');
let $filterData=[];

$.getJSON('../data/video.json', function(data){
    $allData=data
    /* console.log($allData) */
    $filterData=$allData;
    addItem();
    $loadMoreBtn.click(addItem)
    $filter.on('change', 'input[type="radio"]', filterItems)

})

function addItem(data){
    let element=[];
    let slicedData;

    slicedData=$filterData.slice($added, $added+=$addItemCount);
    $.each(slicedData, function(index, item){
        const fileExtenstion=item.video.split('.').pop().toLowerCase();
        //console.log(fileExtenstion)
        const isMp4=fileExtenstion==='mp4';
        const sw=isMp4 ? (`<video autoplay muted src=${item.video} />`) : (`<img src=${item.video}>`)

        let itemHTML = `
        <li>
            <div>
                <a href="javascript:" class="galleryBt">
                    <span class="g-video">
                       ${sw}
                    <span class="g-color"></span>
                    <span class="g-title">
                        <span><strong>${item.title}</strong></span>
                        <span><b>${item.description}</b></span>
                        <span><i class="exploreBt">Explore</i></span>
                    </span>
                </a>
            </div>
        </li>
        `
        element.push($(itemHTML).get(0))

        if($added<$allData.length){
            $loadMoreBtn.text('load More')
        }else{
            $loadMoreBtn.css({backgroung:'#384244', color:'#dee4e3', border:'1px solid #5e686a'}).text('END')

        }
    })

    $container.append(element)
    if($added<$filterData.length){
        $loadMoreBtn.text('load More')
    }else{
        $loadMoreBtn.css({backgroung:'#384244', color:'#dee4e3', border:'1px solid #5e686a'}).text('END')

    }



}
function filterItems(){
    let key=$(this).val();
    $filterData=[];
    $added=0;
    $container.empty();
    if(key=='all'){
        $filterData=$allData;
    }else{
        $filterData=$.grep($allData, function(item){
            return item.category ===key;
        })
    }
    addItem(true)
}