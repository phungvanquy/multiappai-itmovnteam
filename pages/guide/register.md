# Hướng dẫn đăng ký dịch vụ MultiAppAi

## Quy trình đăng ký

Để bắt đầu sử dụng dịch vụ MultiAppAi, các bạn vui lòng thực hiện theo các bước sau:

1. **Đăng ký tài khoản**

   - Truy cập [form đăng ký](https://forms.gle/knjWfYPLjtVVLR8Z9)
   - Điền đầy đủ thông tin cá nhân theo yêu cầu
   - Gửi form và chờ phản hồi từ đội ngũ admin

2. **Bắt đầu sử dụng**
   - Sau khi nhận được API key từ admin, các bạn có thể sử dụng nó để tích hợp vào ứng dụng mong muốn [->Apps tương thích](#cac-ung-dung-tuong-thich)
   - Thông thường các ứng dụng hiện nay yêu cầu 2 thông tin chính để có thể tích hợp custom API đó là: `API_KEY` và `BASE_URL`.

> `API_KEY` sẽ có dạng: `sk-proj-1234567890...`
>
> `BASE_URL` sẽ có dạng: `https://multiappai-api.itmovnteam.com/v1` hoặc `https://multiappai-api.itmovnteam.com`

3. **Theo dõi mức sử dụng và trạng thái hoạt động các model**
   - Model AI sẽ có 2 loại: **Free** và **Trả phí** ([xem giá chi tiết](/pages/pricing/pricing)). Để theo dõi mức sử dụng và số dư tài khoản hoặc nạp tiền, các bạn có thể xem [tại đây](/pages/pricing/recharged)
   - Để theo dõi trạng thái hoạt động của các model, các bạn có thể xem [tại đây](/pages/guide/modelstatus)

## Các ứng dụng tương thích

Multiappai hỗ trợ tích hợp với tất cả các ứng dụng cho phép sử dụng custom model theo format của **OpenAI**.
Một vài ứng dụng phổ biến như:

| Ứng dụng      | Hướng dẫn setup và sử dụng API                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **ChatboxAI** | [Xem hướng dẫn](https://github.com/itmovnteam/multiappai-compatible-apps/blob/main/ChatboxAI.md) |
| **Sider**     | [Xem hướng dẫn](https://github.com/itmovnteam/multiappai-compatible-apps/blob/main/SiderAI.md)   |
| CursorAI      | [Liên hệ admin](https://t.me/multiappai_itmovnteam)                                              |
| Cline         | [Liên hệ admin](https://t.me/multiappai_itmovnteam)                                              |
| n8n           | [Liên hệ admin](https://t.me/multiappai_itmovnteam)                                              |
| ...           | ...                                                                                              |

## WebChatAI - ITMOvnteam

Chúng mình cung cấp trang web chatbox riêng tại [aichat.itmovnteam.com](https://aichat.itmovnteam.com). Mọi người có thể sử dụng **API key** của mình trên ứng dụng này một cách thuận tiện.
