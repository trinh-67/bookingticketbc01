import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  //state danh sach phim
  state = {
    arrFilms: [],
  };
  loadFilm = () => {
    const promise = axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    //xu ly thanh cong((result) => )
    promise
      .then((result) => {
        console.log("result", result.data);
        this.setState({
          arrFilms: result.data,
        });
      })
      .catch((error) => {
        console.log("err", error.response.data);
      });
  };
  renderFilms = () => {
    return this.state.arrFilms.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <img className="card-img-top" src={film.hinhAnh} alt = {film.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{film.tenPhim}</h4>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        Home
        <button
          onClick={() => {
            this.loadFilm();
          }}
        >
          Lấy danh sách phim
        </button>
        <div className="text-center display-4">Danh Sach Phim</div>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }

  //hàm giống hàm render của react component kế thừa nên có
  componentDidMount(){
    //các api muốn gọi sau khi gioa diện render thì sẽ gọi trong hàm này
    this.loadFilm();
  }
}
