---
title: >-
  [ Chuyện của DEV - Phần 2 ] Control một Pull Request Trong Mô Hình Scrum với
  Github
date: '2020-02-26 17:30'
tags:
  - JavaScript
  - Scrum
  - GitHub
---

Xin chào các bạn, ở [bài viết trước](https://dev-blogs.netlify.com/2019-12-31-chuy%E1%BB%87n-c%E1%BB%A7a-dev-ph%E1%BA%A7n-1-t%E1%BB%91i-%C6%B0u-h%C3%B3a-source-code-v%E1%BB%9Bi-coding-convention/) mình đã chia sẻ một vài mẹo nhỏ để `source code` của bạn trở nên dễ đọc và tối ưu hơn. Ở lần này mình sẽ giúp các bạn hiểu rõ hơn về một quy trình làm việc rất quan trọng cho những môi trường `start-up` hay những team nhỏ, nó cũng là một văn hóa làm việc giúp bạn trở nên chuyên nghiệp hơn trong quá trình phát triển bản thân. Đó chính là quy trình `nhận và hoàn thành tasks` với mô hình [Scrum ](https://www.scrum.org/)thông qua `GitHub`.

_Những thứ mình chia sẻ sau đây chỉ là những gì mình đã làm và đúc kết kinh nghiệm từ nó. Mọi thứ vẫn rất hạn chế, vậy nên nếu có gì sai sót mong các bạn, anh chị đi trước có thể bỏ qua hoặc đóng góp thêm để cho bài viết được hoàn hảo hơn!_

\[ Control một Pull Request Trong Mô Hình Scrum với GitHub ] - Như tiêu đề đã nói, mình sẽ mô phỏng lại quá trình để hoàn thành một `Task` trong quá trình phát triển `Project` sử dụng mô hình [Scrum](https://www.scrum.org/) mà mình (Developer) nói chung và team members nói riêng đã và đang làm.

Trước hết hãy sơ lược qua [Scrum](https://www.scrum.org/) là gì (theo [scrum.org](https://www.scrum.org/resources/what-is-scrum)):

![](/img/ScrumFramework.png)

> Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.

Tạm dịch ra tiếng việt là:

> Scrum là một khuôn khổ trong đó mọi người có thể giải quyết các vấn đề thích ứng phức tạp, trong khi cung cấp sản phẩm một cách hiệu quả và sáng tạo với giá trị cao nhất có thể

Những đặc tả về [Scrum](https://www.scrum.org/):

- Lightweight (Nhẹ nhàng)
- Simple to understand (Dễ dàng để hiểu)
- Difficult to master (Khó để thành thạo về nó)

Roles trong [Scrum](https://www.scrum.org/):

- Product Owner
- Scrum Master
- Development Team

> Bởi vì nhóm phát triển theo Scrum là đa chức năng nên Development Team sẽ đảm nhận luôn các vị trí Tester, Designer, Coder.

Với mô hình [Scrum](https://www.scrum.org/), quá trình làm việc sẽ được tách ra thành những giai đoạn nhỏ (Sprint) có thời gian từ 2 tuần -> 2 tháng tùy vào mỗi team quy định. Và với mỗi `Sprint` chúng ta sẽ có những `plan` cụ thể thông qua các công việc sau đây:

1. Sprint planning:

   - Đây là lúc bắt đầu một `Sprint` mới, `Development Team`, `Scrum Master` và `Product Owner` sẽ quyết định xem những công việc nào cần được thực hiện trong `Sprint` tới
   - Sau khi tạo `Issue (tạo task)`, mọi người sẽ đánh giá độ phức tạp của `Issue` và tiến hành `pick task` dựa trên `time commitment` mà mọi người đã xác định. [What is commitment scrum?](https://www.scrum.org/resources/commitment-vs-forecast)

     _Lưu ý: đánh giá độ phức tạp của task là tùy theo cảm nhận của từng member, bạn có thể đánh giá task có độ phức tạp cao nếu bạn cảm thấy nó vượt sức với mình và ngược lại. Tất nhiên nếu bạn đánh giá task quá phức tạp thì bạn nên cho mọi người biết vì sao._

2. Daily stand-up (Daily Scrum): Vào mỗi ngày trong suốt `Sprint`, sẽ có một cuộc họp nhỏ vào buổi sáng khoảng 15 phút để mọi người có thể trao đổi những khó khăn hoặc báo cáo tình hình làm việc trong ngày.
3. Sprint Review: Đây là một cuộc họp nhỏ trong team ở gần cuối `Sprint` để báo cáo xem `members` đã làm được gì. Dựa vào đó để có thể điều chỉnh `Product Backlog` nếu cần.
4. Sprint Retrospective: Với giai đoạn này, mỗi thành viên sẽ tự đánh giá và báo cáo với team xem những gì mình đã làm được và chưa làm được ở `Sprint` này. Dựa vào đó điều chỉnh và đưa ra giải pháp để `Sprint kế tiếp` được tốt và hoàn chỉnh hơn.

   > _Ở plan này, các bạn chỉ cần trả lời được hai câu hỏi: What is goods for yourself? and What need to improve in the next Sprint?_

OK, Đã xong lý thuyết :D. Bây giờ mình sẽ demo cho các bạn cách mà mình cùng `Development Team` tạo `Issue` và `Pull Request` với `GitHub`.

**I. Tạo Issue**

![](/img/issue_1.png)

Để tạo một issue cho project, bạn có thể chọn `Issues Tab` và bấm `New issue`, môt giao diện sẽ hiện ra như hình trên. Trong mục này, một số mục bạn cần làm đó là thêm `Issue's title` (`Description` là để mô tả rõ hơn về issue, có thể có hoặc không) và một số mục phía bên phải.

1. Assignees: Mục này bạn sẽ `assign` cho chính bạn (người tạo ra issue)
2. Labels: Ở mục này các bạn có thể `add labels` để mô tả rõ hơn về `Issue's type` [What is label issue ?](https://docs.readthedocs.io/en/stable/development/issue-labels.html)
3. Projects: Các bạn lưu ý ở mục này, bạn cần chọn `Project` tương ứng đã được tạo trong `Projects Tab` để issue có thể add vào mục quản lý task giống như [Trello](https://trello.com/)

   _Lưu ý: Bạn cần `add new` một Project tại `Projects Tab` để có thể quản lý task như Trello_

4. Milestone: Chọn `Project's Version` tương ứng với issue
5. Linked Pull Request: Đây sẽ là nơi bạn gán `Pull Request Link` tương ứng với issue

Hình ảnh về một `Projects Task` giống [Trello](https://trello.com/)

![](/img/project_1.png)

> Với `Project's Issue`, mọi người trong team hay ngoài team đều có thể `add new issue`, miễn là đừng spam (Cái này thuộc phạm trù vi phạm luật giang hồ về đạo đức nhé :))))

**II. Tạo Pull Request**

Sau khi đã có issue, bây giờ bạn có thể tạo một `GitHub Branch` từ issue đó với một `branch name rule` được định nghĩa sẵn của mỗi team.

Trong trường hợp này mình sẽ tạo một `GitHub Branch` theo rule mình định nghĩa: `imp_nameProject-issueNumber (imp_scrum-1)`, trong đó `imp` có nghĩa là `implement new somethings`, `issueNumber` tương đương với số thứ tự của issue. Branch này có nhiệm vụ `config redux` vào project.

_Nên nhớ, với mỗi issue, bạn sẽ tạo ra một branch tương ứng với issue đó._

Tại `Pull Request Tab`, nhấn vào `New pull request` sau đó bạn sẽ thấy giao diện như sau:

![](/img/PR_1.png)

- base combobox: các bạn sẽ chọn nhánh develop, trong trường hợp này mình không quản lý với `develop branch` nên mình tạo PR thẳng cho `master` luôn.
- compare combobox: các bạn sẽ chọn nhánh mà bạn muốn tạo PR

Các bạn nhấn Create pull request và sẽ thấy hình sau:

![](/img/PRR_1.png)

Tại đây chúng ta cũng có một số mục giống các bước tạo issue như `title`, `assignees`, `labels`, `projects`, `milestone`. Và các bước này bạn cũng sẽ làm giống như tạo issue.

Với mục `Linked issues`, đây sẽ là nơi bạn `add issues` tương ứng mà bạn hoặc người khác đã tạo trước đó. Ở đây bạn không add trực tiếp được khi tạo PR, mà các bạn phải `tạo PR thành công` rồi mới quay lại `Linked issues` được.

> Bạn cũng có thể `link issue` bằng việc viết trong `description` với cú pháp `#issueNumber` (Ví dụ: #1, #2, ...)

Với mục `Reviewers`, đây sẽ là nơi bạn add những thành viên khác vào để họ có thể `review code` giúp bạn. Mục đích của việc tạo PR là để các thành viên khác trong team biết được `bạn đang làm gì`, `bạn làm cái gì`, `bạn làm như thế nào`, vì vậy đây là phần quan trọng nhất cho một PR.

**III. Công việc review code của development team**

Sau khi đã tạo PR thành công, `development team` có nhiệm vụ đi `review code` của PR.

![](/img/review_change.png)

Một PR sẽ có 4 tabs chính.

1. Conversation: Nơi hiển thị các hoạt động của PR, bao gồm việc hiển thị `các hành động` của bạn với PR đó, `hiển thị comments`, hiển thì `danh sách commits` của bạn...
2. Commits: Đây là danh sách các `commits` của bạn đối với PR
3. Checks: Đây là nơi hiển thị `Build`, `Test` và `Deploy` với `word-class CI/CD` của Project team bạn
4. Files changed: Đây là nơi các bạn sẽ `review code`. Nó hiển thị tất cả những gì mà PR này `đang change so với base branch` mà mình đã chọn (master)

   _Để xem được chế độ view code split, bên trái sẽ là base branch code, bên phải sẽ là changed branch code, các bạn cần vào Setting Icon -> chọn chế độ Split -> Apply and reload_

Tại mục `Review change` sẽ có 3 options chính sau khi bạn đã review xong:

- Comment: Chọn nó khi bạn có thắc mắc gì về `code changed` và muốn `comment` để hỏi hoặc `confirm`
- Approve: `Approve` sẽ cho mọi người biết rằng bạn đã `review xong` và mọi thứ đã ổn so với bạn
- Request changes: Khi review xong, bạn để lại một vài comments muốn `PR owner` thay đổi theo ý kiến của bạn thì hãy chọn nó.

Một ví dụ về comment:

![](/img/comment_1.png)

Trong trường hợp này, mình muốn `PR owner` thay đổi một vài thứ. Cụ thể là mình muốn `PR owner` tách `connect react-redux HOC` ra khỏi `export default` bằng việc tạo một `enhance` để dễ dàng cho việc `maintain` và làm ví dụ cho các người code sau, vậy nên mình đã để lại `comment` bằng một ví dụ cụ thể.

Các bạn nên nhớ, công việc `Review code` là một công việc rất quan trọng trong quy trình này, vậy nên các bạn hãy review có tâm nhất nếu có thể.

> _Mình thường review code bằng 2 việc. Đầu tiên là mình sẽ checkout branch về để chạy thử feature, nếu ổn thì mình sẽ vào GitHub đọc xem PR owner đã làm nó như thế nào, logic có tốt không hay có đúng naming convention không._

Những lợi ích khi bạn `Review code` và `PR được Review` tốt:

- Bản thân bạn sẽ học được rất nhiều kiến thức nếu chăm chỉ `đọc code`, `đọc logic` của các thành viên khác trong team. Vì một đoạn code có thể có rất nhiều cách viết hay, vậy nên biết đâu đấy bạn sẽ học được điều hay đó từ `team members`. Tất nhiên đó phải là code từ người có kinh nghiệm. Còn nếu code lởm, các bạn cứ thẳng tay comment :)))
- Code tại môi trường `develop` của team sẽ `hạn chế lỗi` rất nhiều nếu bạn bắt chặt chẽ trong khi `Review code`
- Nếu bạn bắt chặt chẽ về mặt `naming convention`, `logic code` thì luồng project của bạn trở về sau sẽ rất đồng nhất và `clear`. Điều này sẽ rất có lợi cho việc `Maintain Project.`

_Mẹo nhỏ trong khi Review code: Với trường hợp PR có quá nhiều `file changed`, ở bên phải trên cùng của mỗi file sẽ có `viewed checkbox`, nhấn vào đó để file được `toggle hidden`_

Sau khi mọi thành viên đã `Approve PR`, `Scrum master` sẽ có nhiệm vụ `merge` nó vào `develop/master`, và `close issue` kèm theo. Như vậy là đã xong một quá trình xử lý và hoàn thành task.

Hy vọng những chia sẻ nhỏ của mình sẽ giúp nhiều bạn cải thiện được kiến thức và tác phong làm việc được hiệu quả hơn.

> `Code for fun and Code for food`
