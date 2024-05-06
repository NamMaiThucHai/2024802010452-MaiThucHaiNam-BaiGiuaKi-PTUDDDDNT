# 2024802010452-MaiThucHaiNam-BaiGiuaKi-PTUDDDDNT
Đây là bài làm giữa kì của lớp KTCN.CQ.02 môn Phát triển ứng dụng di động đa nền tảng 
Đề Kiểm Tra Giữa Kỳ
Học Phần: Phát Triển Ứng Di Động Đa Nền Tảng
Thời Gian : 150 phút
Yêu cầu: Nộp source code github và record kết quả chạy
1. Thiết kế ứng dụng gồm gồm 3 màn hinh: Login, Home, Register
![image](https://github.com/NamMaiThucHai/2024802010452-MaiThucHaiNam-BaiGiuaKi-PTUDDDDNT/assets/134347252/62239dd2-39a9-43f5-ba92-bbe65d448a21)
3. Sử dụng stack navigator để điều hướng qua các màn hình
4. Cấu hình store với redux hoặc useContext để quản lý state toàn cục để chia sẽ
giữa các component bao gồm:
- userLogin: lưu trữ thông tin user đăng nhập
- jobs: lưu trữ danh sách jobs thực hiện
Link kham khảo Redux: https://react-redux.js.org/ , https://viblo.asia/p/reduxco-ban-m68Z00JdZkG
Sử dụng useContext thay cho redux
./store/index.js4. Thực đăng ký ( Register) và xác thực tài khoản (Login) với email và password qua
auth của firebase và lưu thông tin tài khoản trên firestore của firebase.
- Xử lý hiển thị password trên màn hình Login và Register
- Kiểm tra dữ liệu cho cho các trường sau không đúng hiển thị thông báo lỗi
 Email phải chứa @
 FullName và New entity không phép để trống
 Password ít nhất 6 kí tự
 Password và Confirm Password phải trùng nhau
 Nếu dữ liệu không hợp lệ disable button
5. Xử lý nghiệp vụ màn hình home
- Lưu trữ danh sách công việc trên firestore với collection Jobs
- Xử lý thêm mới Job lên collection Jobs trên firestore
- Fecth danh sách Jobs tu firestore hiển thị trên Flaslist
6. Customise Header màn hình Home hiện full name của user đăng nhập và button
logout xử lý logout tài khoản và về màn hình đăng nhập.
