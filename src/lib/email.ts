import { Resend } from "resend";
import type { Ebook } from "@/types/ebook";

const resend = new Resend(process.env.RESEND_API_KEY);

const BASE_URL = "https://jjangsaem.com";

export async function sendWelcomeEmail(email: string) {
  const { error } = await resend.emails.send({
    from: "짱샘의 치유책방 <hello@jjangsaem.com>",
    to: email,
    subject: "짱샘의 치유책방 뉴스레터 구독을 환영합니다!",
    html: `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f8f6f3;font-family:'Apple SD Gothic Neo','Malgun Gothic',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f3;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#e17055,#d35400);padding:40px 40px 32px;text-align:center;">
            <div style="font-size:32px;margin-bottom:12px;">📚</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">짱샘의 치유책방</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">감각 치유 전문 전자책</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h2 style="margin:0 0 20px;color:#2d3436;font-size:20px;font-weight:700;">구독해주셔서 감사합니다!</h2>
            <p style="margin:0 0 16px;color:#636e72;font-size:15px;line-height:1.7;">
              앞으로 짱샘의 치유책방에서 준비하는 <strong style="color:#2d3436;">감각 치유 콘텐츠</strong>와
              <strong style="color:#2d3436;">새로운 전자책 소식</strong>을 가장 먼저 받아보실 수 있습니다.
            </p>
            <p style="margin:0 0 28px;color:#636e72;font-size:15px;line-height:1.7;">
              후각 훈련, 수면 치유, 부모 마음 돌봄 등 일상에서 바로 실천할 수 있는 치유 정보를 정기적으로 보내드릴게요.
            </p>
            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
              <tr><td style="background:#e17055;border-radius:8px;">
                <a href="${BASE_URL}/ebook"
                   style="display:inline-block;padding:14px 32px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;">
                  전자책 둘러보기 →
                </a>
              </td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #eee;margin:0 0 20px;">
            <p style="margin:0;color:#b2bec3;font-size:13px;line-height:1.6;text-align:center;">
              본 메일은 짱샘의 치유책방 뉴스레터 구독 신청에 의해 발송되었습니다.<br>
              문의: jjangsaem.bookshop@gmail.com
            </p>
            <p style="margin:12px 0 0;text-align:center;">
              <a href="${BASE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}"
                 style="color:#b2bec3;font-size:12px;text-decoration:underline;">
                구독 해지
              </a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });

  if (error) {
    console.error("Welcome email send error:", error);
    throw error;
  }
}

function formatPrice(price: number) {
  return `₩${price.toLocaleString("ko-KR")}`;
}

export async function sendNewBookEmail(email: string, book: Ebook) {
  const bookUrl = `${BASE_URL}/ebook/${book.slug}`;
  const hasDiscount = book.originalPrice && book.originalPrice > book.price;

  const { error } = await resend.emails.send({
    from: "짱샘의 치유책방 <hello@jjangsaem.com>",
    to: email,
    subject: `[신간 안내] ${book.title} — 짱샘의 치유책방`,
    html: `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f8f6f3;font-family:'Apple SD Gothic Neo','Malgun Gothic',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f3;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,${book.colors.primary},${book.colors.secondary});padding:40px 40px 32px;text-align:center;">
            <div style="font-size:14px;margin-bottom:8px;color:rgba(255,255,255,0.9);font-weight:600;letter-spacing:1px;">NEW EBOOK</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">${book.title}</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">${book.subtitle}</p>
          </td>
        </tr>
        <!-- Cover Image -->
        <tr>
          <td style="padding:32px 40px 0;text-align:center;">
            <img src="${BASE_URL}${book.coverImage}" alt="${book.title} 표지" style="max-width:200px;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.12);">
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 40px 40px;">
            <p style="margin:0 0 16px;color:#636e72;font-size:15px;line-height:1.7;">
              짱샘의 치유책방에 새로운 전자책이 등록되었습니다!
            </p>
            <p style="margin:0 0 20px;color:#636e72;font-size:15px;line-height:1.7;">
              ${book.description}
            </p>
            <!-- Book Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f3;border-radius:12px;margin:0 0 24px;">
              <tr><td style="padding:20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color:#636e72;font-size:13px;padding:4px 0;">카테고리</td>
                    <td style="color:#2d3436;font-size:13px;font-weight:600;text-align:right;padding:4px 0;">${book.category}</td>
                  </tr>
                  <tr>
                    <td style="color:#636e72;font-size:13px;padding:4px 0;">저자</td>
                    <td style="color:#2d3436;font-size:13px;font-weight:600;text-align:right;padding:4px 0;">${book.author}</td>
                  </tr>
                  <tr>
                    <td style="color:#636e72;font-size:13px;padding:4px 0;">분량</td>
                    <td style="color:#2d3436;font-size:13px;font-weight:600;text-align:right;padding:4px 0;">${book.pageCount}p</td>
                  </tr>
                  <tr>
                    <td style="color:#636e72;font-size:13px;padding:4px 0;">가격</td>
                    <td style="text-align:right;padding:4px 0;">
                      ${hasDiscount ? `<span style="color:#b2bec3;font-size:12px;text-decoration:line-through;margin-right:6px;">${formatPrice(book.originalPrice!)}</span>` : ""}
                      <span style="color:${book.colors.primary};font-size:15px;font-weight:700;">${formatPrice(book.price)}</span>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
              <tr><td style="background:${book.colors.primary};border-radius:8px;">
                <a href="${bookUrl}"
                   style="display:inline-block;padding:14px 32px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;">
                  자세히 보기 →
                </a>
              </td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #eee;margin:0 0 20px;">
            <p style="margin:0;color:#b2bec3;font-size:13px;line-height:1.6;text-align:center;">
              본 메일은 짱샘의 치유책방 뉴스레터 구독에 의해 발송되었습니다.<br>
              문의: jjangsaem.bookshop@gmail.com
            </p>
            <p style="margin:12px 0 0;text-align:center;">
              <a href="${BASE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}"
                 style="color:#b2bec3;font-size:12px;text-decoration:underline;">
                구독 해지
              </a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });

  if (error) {
    console.error("New book email send error:", error);
    throw error;
  }
}
