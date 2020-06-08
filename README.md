# Ecoleta :recycle: :purple_heart: :iphone: :computer:

Ecoleta is a small project focused on bringing a experience of easy registering and searching for garbage collection locations registered via website or mobile app.

This is a one week fullstack development project, composed of a web page, mobile app and web server with the use of TypeScript to create a Node.js in the backend, web page with React.js and React Native for the mobile app.

This is the web frontend developed for this project, you can check the backend application at [NLW backend](https://github.com/Francozeira/nlw_server), finally, the assets were provided by [Rocketseat](https://rocketseat.com.br/).

## Project setup

Make sure to install all dependecies to run the application, on package.json file you can check all npm scripts used.

### Compiles for development

```
npm run dev
```

------------

:page_facing_up:**College competition rules**

- On each round of the competition, the teams would exchange a whole paragraph wich was suposed to be ciphered using the Vigenère cipher;
- The paragraph to be sent must be the "Abstract" section of an IT or technology related article or paper (our teacher defined this rule so that our latin characters weren't present - as the abstract must be in english, thus there is no need to treat this kind of characters in this code);
- The key used to decrypt the message must be a 3 letter portugue-brazilian word (non-initial, acronym, and so);
> Eg: lua, ovo, jaz, paz

------------

:page_facing_up:**Code description**

- Note the usage of colorama to print the output on the Windows terminal, pretty fancy huh?;
- On next lines, under the *DECIPHERING FUNCTIONS* you have the heavy work of translation made with functions;
- Next you have the *TEST VARIABLES* , this variables contain ciphered paragraphs that are used to test the code;
- *VERIFICATION VARIABLES*, this section is what defines what the script will search for and the word lists used in decryption verification:
- *extendedPossibleKeys* : extended list of words that could be used as a key for Vigenère decryption, remembering that these are all portuguese words, composed of 3 letters;

	- *allPossibleKeys* : expanded list of words that could be used as a key for Vigenère decryption, despite not being exactly in accordance with the rules, so,  we will only use this list if * extendedPossibleKeys * does not find satisfactory results;

	- *securityWords* : after performing the decryption with all the words provided by *extendedPossibleKeys * or * allPossibleKeys *, the script will look for this list of words in all the results obtained, as they are words referring to information security, hardly a positive result here would not be a correct deciphering, so if the script finds a word like this in the list, the result will be printed in the terminal in green;

	- *commonWords* : if the search for * securityWords * does not return any positive results, all results will be searched again, now through this list of the most common words in the English language, but as they are most common words, a positive return here may be just a coincidence, not necessarily a successful deciphering, the result will be printed on the terminal in yellow;

- *CIPHERED TEXTS USED IN THE COMPETITIONS* and *FINALS* : these are the paragraphs we received during the competition and the final, respectively. I specifically saved it to record how an average college student can not understand simple rules and descriptions given by the teacher, if you use them, you will see that most do not meet the rules of the competition; :tired_face: :rage: :weary:

- *receivedCipher* : this variable receives the value of any variable you want, I use it for convenience, to assign value more easily and quickly;

- The rest of the code defines the use of the functions and variables listed above;

------------

:page_facing_up:**Code Behavior**

- The script will use all the keys informed in the variable *extendedPossibleKeys* and *allPossibleKeys*, after it will scan all the results looking for the words registered in *securityWords*, from there, we will have two flows:

 If the script finds a word included in *securityWords*, the terminal will print in green, the following info:
	- What is the verification number (the keyword index);
	- What is the key word;
	- The decrypted text;
	- Decrypted text with white space formatting and punctuation;
	- Confirmation of the length of the received string for decryption in addition to the length of the final result, if everything worked correctly, both will be the same;
	- The script will create a .txt file named decipheredAnswer containing the correct key and dechipered text;

 If the script doen't finds a word included in *securityWords*, it will search for the words in *commonWords* (probably having more than one result), and in case any word is found, the terminal will print in yellow the following info **of all the found results**:
	- What is the verification number (the keyword index);
	- What is the key word;
	- The decrypted text;

 If the script doen't finds a word included *commonWords* , the terminal will print in white the following info of all the found results as a list, so you can sweep through all the results:
	- What is the verification number (the keyword index);
	- What is the key word;
	- The decrypted text;
	- Also, it will ask for a input of the correct key and the text to follow the step below
	- The script will create a .txt file named decipheredAnswer containing the correct key and dechipered text;

------------

**TL;DR:** Just run the file, or, in case any change is needed, change the * receivedCipher * variable to what you want to decipher, and the * extendedPossibleKeys * variables to change the possible keys and * securityWords * to change the words you want to check if they are present in the text deciphered.

------------

####  :sparkles: Runs the script
```
py vigenere.py
```

### 主要特性

- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；
- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；
- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；
- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;
- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；
- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；
- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；
- 支持自定义主题样式；

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**目录 (Table of Contents)**

[TOCM]

[TOC]

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

#### 标题（用底线的形式）Heading (underline)

This is an H1
=============

This is an H2
-------------

### 字符效果和横线等
                
----

~~删除线~~ <s>删除线（开启识别HTML标签时）</s>
*斜体字*      _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes
                    
> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。

### 锚点与链接 Links

[普通链接](http://localhost/)

[普通链接带标题](http://localhost/ "普通链接带标题")

直接链接：<https://github.com>

[锚点链接][anchor-id] 

[anchor-id]: http://www.this-anchor-link.com/

GFM a-tail link @pandao

> @pandao

### 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：`npm install marked`

#### 缩进风格

即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。

    <?php
        echo "Hello world!";
    ?>
    
预格式化文本：

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### JS代码　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

### 图片 Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面
                
----

### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)
                
- 列表一
- 列表二
- 列表三
     
#### 无序列表（星号）Unordered Lists (*)

* 列表一
* 列表二
* 列表三

#### 无序列表（加号和嵌套）Unordered Lists (+)
                
+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三

#### 有序列表 Ordered Lists (-)
                
1. 第一行
2. 第二行
3. 第三行

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
                
----
                    
### 绘制表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |
                
----

#### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

### Emoji表情 :smiley:

> Blockquotes :star:

#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; 
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);
 
#### 反斜杠 Escape

\*literal asterisks\*
            
### 科学公式 TeX(KaTeX)
                    
$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

多行公式：

```math
\displaystyle
\left( \sum\_{k=1}^n a\_k b\_k \right)^2
\leq
\left( \sum\_{k=1}^n a\_k^2 \right)
\left( \sum\_{k=1}^n b\_k^2 \right)
```

```katex
\displaystyle 
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        } 
    }
```

```latex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```
                
### 绘制流程图 Flowchart

```flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
```
                    
### 绘制序列图 Sequence Diagram
                    
```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

### End