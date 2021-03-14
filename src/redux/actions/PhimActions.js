import axios from 'axios';


export const layDanhSachPhimAction = () => {
    return async  (dispatch) => {

        //gọi action loading pen
        dispatch({
            type:'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
           
        })
        //sau khi lấy dữ liệu từ api về sử dụng hàm dispatch của redux thunk để đưa dữ liệu lênsever
        dispatch({
            type: 'LAY_DANH_SACH_PHIM',
            mangPhim:result.data
        })

        //tắt loadings
        dispatch({
            type: 'closeLoading'
        });
        },1000);
    }
}