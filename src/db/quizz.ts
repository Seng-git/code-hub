import { ImageSourcePropType } from 'react-native';

export interface QuizzData {
  image?: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      ques: 'Scratch là gì?',
      choose: [
        'a. Một ngôn ngữ lập trình dành cho trẻ em',
        'b. Một trò chơi',
        'c. Một phần mềm xử lý văn bản',
      ],
      ans: 0,
    },
    {
      ques: 'Trong Scratch, nhân vật được gọi là gì?',
      choose: ['a. Code', 'b. Sprite', 'c. Background'],
      ans: 1,
    },
    {
      ques: 'Khối lệnh nào dùng để di chuyển nhân vật?',
      choose: ['a. Say', 'b. Move', 'c. Turn'],
      ans: 1,
    },
    {
      ques: 'Khối lệnh nào để thay đổi kích thước của Sprite?',
      choose: ['a. Change size by', 'b. Move', 'c. Glide'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “forever” trong Scratch có chức năng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Chạy một hành động một lần',
        'c. Lặp lại một hành động mãi mãi',
      ],
      ans: 2,
    },
    {
      ques: 'Trong Scratch, khối lệnh nào dùng để phát âm thanh?',
      choose: ['a. Play sound', 'b. Move', 'c. Change costume'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “wait 1 second” làm gì?',
      choose: [
        'a. Thay đổi trang phục sau 1 giây',
        'b. Di chuyển nhân vật 1 giây',
        'c. Khối lệnh “wait 1 second” làm gì?',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh “when green flag clicked” có tác dụng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Di chuyển nhân vật',
        'c. Bắt đầu chương trình',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh nào giúp thay đổi trang phục của Sprite?',
      choose: ['a. Change costume', 'b. Move', 'c. Say'],
      ans: 0,
    },
  ],
  medium: [
    {
      ques: 'Mục đích của khối lệnh "phát sóng" (broadcast) trong Scratch là gì?',
      choose: [
        'a. Gửi một thông điệp giữa các nhân vật hoặc các đoạn mã',
        'b. Phát âm thanh cho tất cả các nhân vật',
        'c. Kết nối với Internet',
      ],
      ans: 0,
    },
    {
      ques: 'Khối lệnh nào được sử dụng để lặp lại một tập hợp hướng dẫn một số lần nhất định?',
      choose: ['a. Khối lặp mãi mãi (Forever)', 'b. Khối lặp lại (Repeat)', 'c. Khối đợi (Wait)'],
      ans: 1,
    },
    {
      ques: 'Khi một nhân vật chạm vào cạnh sân khấu và sử dụng khối "nếu chạm cạnh, bật lại" (if on edge, bounce), chuyện gì sẽ xảy ra?',
      choose: [
        'a. Nhân vật biến mất',
        'b. Nhân vật quay đầu lại và tiếp tục di chuyển',
        'c. Nhân vật trở về vị trí trung tâm',
      ],
      ans: 1,
    },
    {
      ques: 'Cấu trúc dữ liệu nào được tạo ra khi sử dụng tùy chọn “Tạo danh sách” (Make a List) trong Scratch?',
      choose: [
        'a. Biến',
        'b. Mảng',
        'c. Danh sách',
      ],
      ans: 2,
    },
    {
      ques: 'Trong Scratch, bạn sẽ sử dụng khối nào để kiểm tra xem một nhân vật có đang chạm vào nhân vật khác không?',
      choose: [
        'a. Nếu <phím được nhấn?> thì',
        'b. Nếu <chạm [Nhân vật1]> thì',
        'c. Nếu <chuột được nhấn?> thì',
      ],
      ans: 1,
    },
  ],
  hard: [
    {
      ques: 'Khối lệnh nào trong Scratch là cần thiết để xử lý các sự kiện bất đồng bộ, như việc sprite phản hồi khi nhận được một broadcast?',
      choose: [
        'a. Khối Điều khiển (Control)',
        'b. Khối Cảm biến (Sensing)',
        'c. Khối Sự kiện (Event)',
      ],
      ans: 2,
    },
    {
      ques: 'Scratch xử lý broadcast như thế nào nếu có nhiều sprite cùng lắng nghe?',
      choose: ['Theo thứ tự bảng chữ cái của tên sprite', 'b. Thực thi đồng thời tất cả các sprite lắng nghe', 'c. Dựa trên vị trí của sprite trên sân khấu'],
      ans: 1,
    },
    {
      ques: 'Lựa chọn nào sau đây sẽ tạo ra một bản sao (clone) có hành vi khác với sprite gốc?',
      choose: ['a. Thay đổi trang phục (costume) của clone sau khi tạo', 'b. Gửi broadcast tới tất cả các sprite', 'c. Chỉnh sửa mã lệnh của sprite gốc'],
      ans: 0,
    },
    {
      ques: 'Điều gì xảy ra khi bạn sử dụng khối lệnh "delete this clone" trong Scratch?',
      choose: ['a. Tất cả các bản sao của sprite đó sẽ bị xóa', 'b. Chỉ bản sao hiện tại bị xóa', 'c. Sprite gốc sẽ bị xóa'],
      ans: 1,
    },
    {
      ques: 'Tình huống nào sau đây sẽ khiến một hàm đệ quy trong Scratch bị treo hoặc gây lỗi?',
      choose: [
        'a. Hàm đệ quy có sử dụng bộ đếm thời gian',
        'b. Hàm đệ quy không có điều kiện dừng (base case)',
        'c. Hàm đệ quy nằm trong vòng lặp "forever"',
      ],
      ans: 1,
    },
    {
      ques: 'Tại sao một sprite không phản hồi khi nhận được một broadcast dù đã gửi đúng tên broadcast đó?',
      choose: ['a. Sprite đang bị ẩn', 'b. Sprite không có mã lệnh xử lý broadcast đó', 'c. Broadcast chỉ hoạt động trên sân khấu'],
      ans: 1,
    },
    {
      ques: ' Hệ quả nào không phải là kết quả của việc sử dụng vòng lặp forever bên trong một khối tùy chỉnh có bật tùy chọn “chạy mà không làm mới màn hình”?',
      choose: [
        'a. Giảm độ trễ hình ảnh',
        'b. Có thể khiến project bị treo',
        'c. Tối ưu hóa đệ quy',
      ],
      ans: 2,
    },
    {
      ques: 'Lý do chính để sử dụng biến với tùy chọn “chỉ dành cho sprite này” là gì?',
      choose: [
        'a. Để chia sẻ dữ liệu giữa các sprite',
        'b. Để giới hạn truy cập dữ liệu chỉ cho một sprite',
        'c. Để giảm sử dụng bộ nhớ',
      ],
      ans: 1,
    },
    {
      ques: 'Tính năng nào trong Scratch cho phép sprite phát hiện xem nó có đang chạm vào một sprite khác theo tên không?',
      choose: ['a. Khối “touching color”', 'b. Khối cảm biến “touching (sprite)”', 'c. Khối điều kiện “if-else”'],
      ans: 1,
    },
  ],
};
