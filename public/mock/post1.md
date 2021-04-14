# [ Chuyện của DEV - Phần 1 ] Tối Ưu Hóa Source Code Với Coding Convention

Xin chào mọi người ! Mình là Thái, hiện tại mình đang làm vị trí `Front-End Developer`. Mình viết ra Series `Chuyện của DEV` này mong muốn chia sẻ những kinh nghiệm ít ỏi của mình, giúp những bạn `DEV` mới vào nghề có cái nhìn sâu hơn về những thứ mà các bạn sẽ phải trải qua trong qúa trình đi làm. Giúp các bạn có thể cải thiện hơn về `performance` trong qúa trình làm việc.

_Do main technical của mình là JavaScript nên Series này mình sẽ chỉ nói về `functional programming`_

![](/img/code-main.jpg)

**Câu chuyện thứ nhất mà mình muốn chia sẻ cho các bạn theo góc nhìn của mình đó là Coding Convention trong qúa trình phát triển source code.**

Đầu tiên, mình sẽ show với các bạn một đoạn `code` mình từng viết bằng `Jquery` ( đây là một function `handle success` khi call `ajax` ):

```javascript
success: function (result) {
  if (result.success == true) {
    var priceCOD = result.rs.reduce((currentprice, item) => {
      return currentprice + item[4];
    }, 0);
    var priceServiceCharge = result.rs.reduce((currentprice, item) => {
      return currentprice + item[5];
    }, 0);
    if (result.rs != null) {
      for (var j = 0; j <= result.rs.length - 1; j++) {
        if (result.rs[j] == false) {
          checkGlobal = false;
        } // if have isCorrect == false => have error
      }
    } else {
      checkGlobal = false; // List result.rs == null => have error
    }
    // Còn nữa nhưng nhiều quá :3
  } else {
    ShowAlert(result.message, 1);
  }
};
```

Khoan hãy nói đến chức năng của `function` này ( mà nếu có nói đến chắc mình cũng không thể giải thích được chức năng của nó mặc dù mình là người `implement` :3 ). Có lẽ bạn cũng sẽ thấy, có quá nhiều vấn đề đối với đoạn `code` trên. Vd đặt `tên biến` không có nghĩa, `comment` vô nghĩa và quan trọng nhất là `code` rất dễ có `bug`.

Tiếp theo, các bạn `follow` đoạn code dưới đây (đoạn code đã được cải thiện rất nhiều về `convention` sau một quá trình uốn nén của anh Leader mình :D ):

```javascript
import { toast } from 'react-toastify';
import {
  TOAST_SUCCESS, TOAST_ERROR, TOAST_WARN,
  TOAST_INFO, TOAST_DEFAULT
} from '../utils/actions';
const TOAST_DEFAULT_OPTIONS = {
  autoClose: 5000,
  ...
};

const getToastFunctionByType = type => {
  switch (type) {
    case TOAST_SUCCESS: return toast.success;
    case TOAST_ERROR: return toast.error;
    case TOAST_WARN: return toast.warn;
    case TOAST_INFO: return toast.info;
    case TOAST_DEFAULT: return toast;
    default: return null;
  }
};

export default {
  displayNotify(state = {}, { type, payload = {} }) {
    const { message, options = {} } = payload;
    if (!message) { return state }
    const doToast = getToastFunctionByType(type);
    if (doToast) {
      const opts = Object.assign(TOAST_DEFAULT_OPTIONS, options);
      doToast(message, opts);
      return payload;
    }
    return state;
  }
};
```

Đây là một `reducer function` trong `Redux`, nhiệm vụ của nó là hiển thị `Toast` cho người dùng. Có vẻ như nó đã dễ đọc hơn đoạn code 1 đúng không. Với đoạn code 2 này, tên biến, tên hàm đã được đặt có nghĩa hơn, có `default parameter` để tránh trường hợp `error` khi `access` đến `object's key`, có check điều kiện để cải thiện `performance`. Và đặc biệt mình có thể hiểu ngay ý nghĩa của `function` khi đọc lại mà không cần bất cứ một dòng `comment` nào.\
\
Để giúp các bạn cải thiện hơn về những kĩ năng này, mình sẽ liệt kê một vài điều bạn nên chú ý khi phát triển bất cứ một `Souce Code` nào:

#### **1. Đặt tên biến + tên hàm**

Đặt tên biến, tên hàm trước khi `implement` code luôn luôn là một điều rất quan trọng cho một `source code` đẹp. Với các bạn mới bước chân vào nghề và bắt đầu code những dự án thực tế, điều đầu tiên mình chỉ muốn nói là đừng đi vào vết xe đổ của mình. Hãy tập thói quen đặt tên biến, tên hàm có ý nghĩa ngay từ đầu, đó tất nhiên sẽ là một thói quen tốt.

Đừng bao giờ đặt tên biến, tên hàm vô nghĩa hoặc không đúng nghĩa như là:

```javascript
var a = ...;
var list = ...;
var data = ...;
var result = ...;
function getListData() {
   // ...
}
function parseData() {
   // ...
}
```

Mà thay vào đó hãy cố gắng đặt tên có ý nghĩa, đúng cấu trúc ngữ pháp, tuân thủ số nhiều số ít và áp dụng quy tắc [camelCase](https://en.wikipedia.org/wiki/Camel_case) như là:

```javascript
var user = ...;
var users = ...;
var product = ...;
var listUser = ...;
var usersArray = ...;
function getListUser () {
   // ...
}
function parseBoolean(value) {
   // ...
}
function parseInt(value) {
   // ...
}
```

Mình đã từng nghe môt câu **"Dành cả thanh xuân chỉ để đặt tên biến".** Nếu bạn nghĩ mãi chưa ra cái tên, hãy tập trung vào công dụng của `data`, chức năng của `function`, rồi dựa vào đó để đặt tên cho chính xác.

> _Tên dài hay ngắn không quan trọng, quan trọng là đúng nghĩa. Đừng để bản thân trở thành một [Ninja Code](https://javascript.info/ninja-code)_

#### **2. Comment**

Theo những gì mình cảm nhận, `function` nào càng có nhiều `comment` thì sẽ càng gây rối và khó đọc. Ở đây mình không nói để lại `comment` là sai, nhưng hãy `comment` đúng nơi và đúng lúc. Thay vì mang ý nghĩ `comment` lại để lần sau đọc cho dễ hiểu, thì hãy tập trung đặt tên biến, tên hàm và xử lý `logic code` đơn giản nhất có thể.

Chỉ khi nào `function` của bạn có một logic phức tạp rất khó để diễn giải bằng `code`, hoặc bạn viết ra một `document` cho mọi người dùng chung thì lúc đó bạn hãy nghĩ đến việc để lại `comment`.

> Và nếu có để lại `comment` thì hãy nhớ follow theo [JSDoc](https://jsdoc.app/about-getting-started.html)

#### **3. Clear và Split Function**

`JavaScript` là một trường phái `Functional Programming`, vì vậy mỗi `function` bạn tạo ra chỉ nên có duy nhất một chức năng chính. Nếu bạn cảm thấy `function` của bạn có thể tách nhỏ ra nữa và những `function` nhỏ đó có thể dùng được ở những nơi khác thì hãy làm nó ngay.

Trong qúa trình `implement code`, chắc chắn bạn sẽ có những đoạn `code` bị lặp đi lặp lại rất nhiều lần. Ví dụ như nếu bạn làm việc liên quan đến ngày tháng, chắc chắn bạn phải `format` ngày tháng thành các định dạng dễ nhìn hơn để hiển thị cho người dùng.

Thay vì tại mỗi hàm bạn phải dùng `moment().format()` như vậy:

```javascript
import moment from 'moment';

const displayFromColumn = time => moment(time).format('DD/MM/YYYY');
const displayToColumn = time => moment(time).format('DD/MM/YYYY');
const displayDateCreatedColumn = time =>
  moment(time).format('DD/MM/YYY hh:mm:ss A');
```

Thì bây giờ các bạn có thể tách ra như sau:

```javascript
import moment from 'moment';
const DATE_FORMAT = 'MM/DD/YYYY';
const TIME_FORMAT = 'hh:mm:ss A';
const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
const formatDate = time => moment(time).format(DATE_FORMAT);
const formatDateTime = time => moment(time).format(DATE_TIME_FORMAT);

const displayFromColumn = time => formatDate(time);
const displayToColumn = time => formatDate(time);
const displayDateCreatedColumn = time => formatDateTime(time);
```

Các bạn thấy `code` đã dễ `control` hơn rồi đúng không? Khi muốn thay đổi `format`, bạn chỉ cần sửa một chỗ và tất cả mọi nơi trong `project` sẽ tự động `applied`.

> Chú ý : Những hàm dùng chung mà bạn tạo ra, nên đưa nó vào một thư mục gọi là `utils`. Khi nào cần dùng ta chỉ cần `import` chúng

Đây là một số hàm mình thường tạo ra trong `utils`:

```javascript
export const doFunctionWithEnter = (event, func) =>
  typeofevent === 'object' &&
  event.key === 'Enter' &&
  typeoffunc === 'function' &&
  func();

export const parseBoolean = value =>
  !value || value === 'false' || value === 'null' || value === 'undefined'
    ? false
    : true;

export const isAllOfTruthy = (arrValues = []) =>
  arrValues.every(value => !!value);

export const isEmptyObject = object => !Object.keys(object).length;

export const formatPrice = value =>
  value
    ? value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    : null;
```

Bây giờ mình có thể dùng những hàm này ở mọi nơi trong `project`. Code tại những `function` chính của mình sẽ trở nên ngắn gọn và dễ đọc hơn.

#### **4. Logic Code**

Các bạn nhìn lại đoạn code sau:

```javascript
displayNotify(state = {}, { type, payload = {} }) {
  const { message, options = {} } = payload;
  if (!message) { return state }
  const doToast = getToastFunctionByType(type);
  if (doToast) {
    const opts = Object.assign(TOAST_DEFAULT_OPTIONS, options);
    doToast(message, opts);
    return payload;
  }
  return state;
}
```

Mình đã kiểm tra nếu không có `message` thì sẽ `return function` luôn. Điều đó tránh được trường hợp khi dùng mình truyền vào `message` là một giá trị `Falsy` thì `function` luôn luôn phải `execute` tất cả dòng code.

Với đoạn code này, logic xử lý là rất ít. Các bạn thử tưởng tượng sau dòng kiểm tra `message` của mình là một loạt các hàm bất đồng bộ như là gọi `API` bên thứ 3, gọi `API` xuống `Database`, ... và nếu bạn không kiểm tra thì `function`của bạn luôn luôn phải tốn thời gian để xử lý.

Mình hy vọng những chia sẻ của mình có thể giúp các bạn cải thiện hơn trong vấn đề `Coding Convention`.

> `Code for fun and Code for food`

To be continue ---->
