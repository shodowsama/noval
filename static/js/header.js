function headimg_btn(){
    const headimg_btn = document.querySelector('.headimg_menu').style.display
    if (headimg_btn === 'grid'){
        document.querySelector('.headimg_menu').style.display = 'none'
    } else {
        document.querySelector('.headimg_menu').style.display = 'grid'
    }

}

