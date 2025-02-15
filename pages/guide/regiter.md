# Hướng dẫn đăng ký dịch vụ MultiAppAi

## Quy trình đăng ký

Để bắt đầu sử dụng dịch vụ MultiAppAi, các bạn vui lòng thực hiện theo các bước sau:

1. **Đăng ký tài khoản**

   - Truy cập [form đăng ký](https://forms.gle/knjWfYPLjtVVLR8Z9)
   - Điền đầy đủ thông tin cá nhân theo yêu cầu
   - Gửi form và chờ phản hồi từ đội ngũ admin

2. **Bắt đầu sử dụng**
   - Sau khi nhận được API key từ admin, các bạn có thể sử dụng nó để tích hợp vào ứng dụng mong muốn [->Apps tương thích](#ung-dung-tuong-thich)
   - Thông thường đa số các ứng dụng hiện nay yêu cầu 2 thông tin chính để có thể tích hợp API đó là: `API_KEY` và `BASE_URL`.

> `API_KEY` sẽ có dạng: `sk-proj-1234567890...`
>
> `BASE_URL` sẽ có dạng: `https://multiappai-api.itmovnteam.com/v1` hoặc `https://multiappai-api.itmovnteam.com`

3. **Theo dõi mức sử dụng và trạng thái hoạt động các model**
   - Model AI sẽ có 2 loại: **Free** và **Trả phí** ([xem chi tiết](/pages/pricing/pricing)). Để theo dõi mức sử dụng và số dư tài khoản hoặc nạp tiền, các bạn có thể xem [tại đây](/pages/pricing/recharged)
   - Để theo dõi trạng thái hoạt động của các model, các bạn có thể xem [tại đây](/pages/guide/modelstatus)

## Ứng dụng tương thích

Multiappai hỗ trợ tích hợp với tất cả các ứng dụng cho phép sử dụng custom model.
Một vài ứng dụng phổ biến như:

| Ứng dụng | Hướng dẫn tích hợp và sử dụng API                                          |
| -------- | -------------------------------------------------------------------------- |
| Sider    | [Xem hướng dẫn](https://multiappai.itmovnteam.com)                         |
| Chatbox  | [Xem hướng dẫn](https://multiappai.itmovnteam.com)                         |
| CursorAI | [Xem hướng dẫn](https://github.com/bilal77511/custom-models-in-cursor-IDE) |
| Cline    | [Xem hướng dẫn](https://multiappai.itmovnteam.com)                         |
| Nextchat | [Xem hướng dẫn](https://multiappai.itmovnteam.com)                         |
| ...      | ...                                                                        |

## Dịch vụ đặc biệt

Chúng mình cung cấp trang web chatbox riêng tại [chatgpt.itmovnteam.com](https://chatgpt.itmovnteam.com), được duy trì bởi ITMOvnteam. Mọi người có thể sử dụng `API key` của mình trên ứng dụng này một cách thuận tiện.

_Lưu ý: Vui lòng giữ API key bảo mật và không chia sẻ với người khác để đảm bảo an toàn cho tài khoản của bạn._
