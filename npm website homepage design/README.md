![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | HTML & CSS - NPM clone

## Learning Goals

In this exercise, the goal is to apply as many as possible of the concepts you've just learned:

- when and how to use different HTML tags,
- how to structure HTML page and add the content to it using _block and inline elements_,
- how to use flexbox to position elements on the page and
- how to style the page.

## Getting started

1. [Fork](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) this repo
2. [Clone](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

**Keep in mind that you don't have to wait to fully finish the exercise to make a pull request. You only have to make a pull request once. After that, every time when you make a commit, it will be automatically added and shown in the pull request.**

## Instructions

### Introduction

In this exercise, you will clone the landing page of the **NPM website**. NPM stands for a Node Package Manager, and you will be using it heavily throughout this course. The version you will be cloning is the one in that you see in the following image. If you want, you can visit the [official page](https://www.npmjs.com/) to pick up some of their styles, but this is not necessary; you’ll see that the NPM page has been updated, but that’s okay. You already have all the assets for this version in the images folder as well as the necessary text in the `index.html`.

Our goal is to get as close as possible to this:

![](https://ilkcng.bn.files.1drv.com/y4m6QVvhtgzJoBCQ_KtAAWCPb_LBNNGHx924XIQUp6wk5kQ8DNgHo68ZbufSvpjbzNmfA4b8P867jMXXYNJgHGZ12zF_vhB1YG-qPwZY3hwL3mVFhyZvAUa-fQCDihA8F3SfLnNXAljiZ-vEWbNr-hOL4IPee5ZJR2hkZTVKtFHkSdjNiDFjrwOJ_NyxaFBCOwuO7ThXvcsjY970QI-6HMFAg?width=1343&height=231&cropmode=none)
![](https://ilkdng.bn.files.1drv.com/y4m7jSoqgGQAR1BEsSRn8_sQ8e3MoasA_YYAS9up0TpDbuYs63s0vIJNLQKKWz8lzFScyCtNLA6llomIfIojTVwtY3qn8h7EkcVkShwUbZQe7mITI5Lwq1k_03YmnEhrtllmYeuEpLs_tHzi6yRDne6vERcwfBnMC8rPB-X6OFFOVDu-Kfdm59YyCYf2InCBYZdK9Gbdy5gWRGEM4lbZxDODg?width=1342&height=357&cropmode=none)
![](https://ilkbng.bn.files.1drv.com/y4mpb0kXN3GlEy0AhvRdSp6BWlwfxBF7vouTlM8zqxMrMHLGsmGCpaMKkNn3ryCUnL7_0AACTWhTtxL7PmjKWMud55uFanRHJCfqDdIY1-VT9nMv1Tx4I882fs7Tw9LNMPU_gflcezJxLL51e3H608ggkUUTtcZaIRgfhrqMvXgJlLTR3A8MKKUSHT3NEVAODecYg9EYBIwgls8WrDx2i9gGQ?width=1341&height=388&cropmode=none)
![](https://ilkang.bn.files.1drv.com/y4mOqKQHU6Pkr9v5QR6FGlp3SYxXSvOMn6LVxi2hEji4cdIF_h0tETmr6UJjyQoXej-7lNi_op6b7meI8fCSPhuwqJWOaeF-OrQCBg_kt6I4g_mVPnia90MQg1S6XwEXN1Cc0oHgRYHdkejgpfJ3jVltOTCkKoQtpYO7FoIFb44r6iuA12cLy2kj_j_Hf5VERcbvlt-lXyGXOYoiM_8pLUZTA?width=1343&height=530&cropmode=none)
![](https://iljqng.bn.files.1drv.com/y4menGzetAuCplL8dDPu1TRGNWM-ekdunP4qGsX6biVNnav994YW-b7K1JGGhXjiEF0ig2m9_NbMU5m30vm2NUHv2oDXplUxh6I1D3c92dl9mNDbTpw63QEa9Ivu5Oz21pTU-X5d2h07AGc8KLfBIskKFaCgRXWduzrAgWdypxwpIkh-JAsTaGo9spUZDiG0X2ybagG52jdfDgnRD1vqOcc3Q?width=1343&height=448&cropmode=none)
![](https://iljpng.bn.files.1drv.com/y4mxJAtU8eq6P9oi8f8VsG5Yv-hM2t-c56a0W3rEFMh0EUyMk_l4lZ9Ww7xISTauqphecJPBkKdjvK1KdTKOQExXs-9uan0UaHHt2LOKPpUBNeg-AnSX5-P5NGd0THbIa83vjFeVK3Lmepf2zFT2aWgYj9G52naFhSqp1SBggTIGP5lpr-fma7vMX6K17DvvB4oAvrHvsiXfhIQBIt-EgW4aA?width=1343&height=367&cropmode=none)
![](https://ilj9ng.bn.files.1drv.com/y4muhIIR4G6X3zbZYLWFkbLDQJm_ntNbkezHMpLIBo0n5y7FL1KfzGH9cCv-wMUGdV7gDyHZ2Zu7kvv90DJXSWcccfxn1faXpgR0FA8-I8LVIhZ0IuPjI63Kz5YnFevtl5QAvq6MjzjwYISXCHxZMUsltElKDz1tPOARgwMEZGAk2B1Uq2BPzf1Nj2amorBh24IPb9nOQHvAcM9ixJR05js1Q?width=1344&height=237&cropmode=none)
![](https://ilj8ng.bn.files.1drv.com/y4mH5euErvapj_XCRuOonRayqufCkv_jVTeiyGziHKme3FsJz1HvVXRmftBNVCQlxGdw3NCdMZZQOhkjqkMIaFH2DnxWRl6HCu4tPRFKlU7dcryBDyJsywLt9xFTOsO6cBtGBn_igNy4a3mzMdJ6vpDJkDr8qzjoJ2QHC_ECX3Lf8FMNUx8-ov7ClxaFwuDgV9rlPrdrlLEe9rOUMfIAWQWgg?width=1341&height=513&cropmode=none)
![](https://ilklng.bn.files.1drv.com/y4mpbWo-wfTgV2ia_oAQXu3rTLoYK50-lM3OFMKQejV6pIDF5wxrBCc-vvhb6VwsUrcVt13v0Oh3LOug4btJkV3aZ7Vv1ZQilAUn6zIosgdoGK9vg9nOF80DamecqwM6gpn4cE-X3ZYPemBBwqLp4-F2nTmYsrWiH68HImJgREKRwo8ifEfTLZ48Vb5lPkH5R3SE-uHSkCizUZfQolJduAXZg?width=1342&height=552&cropmode=none)

Although it doesn't look too complicated, we will have to apply quite a few styles on our web page: set a background color on different elements, set a font weight (bold, normal), and position elements using our newly acquired skills in flexbox.

We will divide our work into two parts:

- part I - create a webpage with no styles, just add HTML and
- part II - add styles and make it perfect. 🎨

So let's get started!

**The assets we provided contain the `index.html` file, as well as the `images` folder with all the required images to successfully finish the exercise.**

### Part I - pure HTML (no styles applied)

It might seem like a joke, but this is our goal in this iteration:
![1](https://i1kdng.bn.files.1drv.com/y4mNhLR86qK3PsPFg7f51D4Vc1mzvfjOIc4-6LNPiLUsORsznxV8nkFQgn9gOIZUBkgATeoNuYoI247klDZfbl7WQrME1t9_X2oWAkFPtwBkpFvvVCyBelDiHXLTiOEQlDMSV18xBM19mBFut-3cUWcNIiiDJg_4lqwAkoEzbynUHCB4xz0_4rNLX-ui2wb0-266ezsQ4FUHbWfc-Wvcq3iGg?width=1343&height=491&cropmode=none)
![2](https://i1kcng.bn.files.1drv.com/y4mZLUmausPXprCemTmSplK2STDZ_9F9QLwlMjf1Goa_3-2E7Twmoq2KU3UZnkU41oNtwwCgc6M-XP9EN-VldKnhMk6JbTfjzCqEyDDlJJQXA-EjwMXCMdaykK33pyQN-JCMLCuWGV8G5dAOMgOrc8b7dNNi1x9SL2K5CsD0pd2wxKvFxYgy4oqNF-vjd8rc9LNLXkLojMmBY5xBOMiYNfJ-w?width=1344&height=488&cropmode=none)
![3](https://i1kbng.bn.files.1drv.com/y4m_3jtSZwNm-cZcIZUTm1Y90TKsw6f--R3mvP5j4W8Z6GuQKvQnsi_oj6-uMp1w1PKsCYdbQopA3YkGXZ_bGo8jyKyh07nEQUnM9u8U4sxAOblLMWuadvlypIBQDPqBgNe_vuJ1WoS8mxBGrxCXBk71BE1ERnQqrn9eMCTrqJbZHEp32Qt6v0KNYIS7p4YUGX-TjFTH33UblvkTNEE-YZ7Ng?width=1338&height=547&cropmode=none)
![4](https://i1jqng.bn.files.1drv.com/y4ml_gCvvuYXIaaGT-jngL180WPSzfrTSg43XMSaS0vTy8zOGEcZ_x5BzkoCr8yz_e_uz-j-OZBHou2ceuuiNTGkRBtqxKvQR-9uBGeODt2fEascv1o1WpadBLFrS1QQlG0EXOPanZdYRJa5yDi8clM3IEijaZLz-7jE15QlQd3i6JjmBj0Vc8hSUBirVUgb6YrgzAWxproeMPt_4pLA2f0wg?width=1339&height=552&cropmode=none)
![5](https://i1kang.bn.files.1drv.com/y4mpgL4exBVWIgP4nEuJ3bpIe3RbVnuDWzPBRBt5IgRaWo3EXpPoY670NM4wcZJ2AsJ2kxJk6YfpndQquA4tKFA40_xW6MFloshnWt1EydtTuUk95oSPtvrJEuMD3TtA-zZPYoXMUC3AKJ0v02kIeIwgjwjWxEhXfDTDrGC6-NgE1ut4QF-PIxNRWuQAMmWL4NvoHL38HlVESTvb48rJSUeyg?width=1344&height=537&cropmode=none)
![6](https://i1jpng.bn.files.1drv.com/y4mezIZPz_zc4jHIdoRDRsniEGSUi6RTTTbqqZyfSBmjph_U9ftEBXLMzrgUedCRjL76UUManma21bKYcElIXgNGMrHgwBQl1wOmDAxbJqTaWqVi9qc-Q5cj8MexHSuSoLde1sy1bbN_y-vRPyYQvX1EWBg0fKYH1GAJHD4HTTsGqEEvOF-eSDnySbYLgc-A-fvorzbdziuCmAwwOLk5TtlsQ?width=1340&height=80&cropmode=none)
![7](https://i1j9ng.bn.files.1drv.com/y4mB8Bx0gYxhCox8JyGghX7-MzYkdvRHh2UdIkW1gRHmDIwkxfXY-YEPI7dBTs0DILfAXwk0R1nqcfHpSe33oHbl663hvs_F-gAvJF7J-Fa9md7uCVuCctczLJVizapigJ4SpX0iwEpCB4fOiwI5K7R6OcPWHLsvzWKyv5r5k7slFJNtMPNFhqh61PGYjVClrU1lq1jOG6N_ny9GR_rBwoXIA?width=1337&height=503&cropmode=none)
![8](https://i1j8ng.bn.files.1drv.com/y4mkGXi4GNyy3EgwMVCR-d8d5bhraTuruUDYtCfQqjmuPE1zB1-rrKxlYJs1eSdQVyM-6tMinofZlXF0QpCsLIGj-P1QmIGBAF-A2n-u6tL6K3pW6J0UnmRkglmpRvZuqs5sKWlDrecRz7K7fJqgGDeb3b6SQrhzlZjVaV5x9bWOPw6U61ENCvQJxtVREO-5D-D7c4sG_ael_2572-Y3mDjmw?width=1344&height=451&cropmode=none)

<br>

The very first step is deciding **how to structure the page and picking the correct _semantic_ tags**. In general, choosing the right tags will make your job easier in the next step when the time comes to do some styling.

Our recommendation is to try to keep it as simple as possible. Try to identify the different sections, and add `id`'s or `classes` to each `<div>`, `<section>`, `<ul>`, or `<header>` block elements to identify these elements. Here is suggested guideline but you might have something on your mind that is different from this - bring it up.

![]()

#### HTML 1 | `<header>` & `<nav>`

Your task in this iteration will be to create the `header` and `nav`, which are the first two elements of the page. As you can see on the image above, the first element inside the body is `header` and it is composed of two divs:

- the upper div contains another div with image and some text, and besides this, it has _nav_ tag with list displayed horizontally
- the bottom div has the logo, search bar (which is _form_) and some buttons all the way left.

![](https://ilkcng.bn.files.1drv.com/y4m6QVvhtgzJoBCQ_KtAAWCPb_LBNNGHx924XIQUp6wk5kQ8DNgHo68ZbufSvpjbzNmfA4b8P867jMXXYNJgHGZ12zF_vhB1YG-qPwZY3hwL3mVFhyZvAUa-fQCDihA8F3SfLnNXAljiZ-vEWbNr-hOL4IPee5ZJR2hkZTVKtFHkSdjNiDFjrwOJ_NyxaFBCOwuO7ThXvcsjY970QI-6HMFAg?width=1343&height=231&cropmode=none)

However, remember, on the image above styles are already applied so our final result won't be quite the same.

We could try to represent this part of the website with the following:

```html
<header>
  <div>
    <div>
      <img class="blackHeart" src="LINK TO IMAGE GOES HERE" alt="black heart" />
      <span> Nifty Penguin Magic </span>
    </div>
    <nav>
      <ul>
        <li><a href="#"> npm Enterprise </a></li>
        <li><a href="#"> Products </a></li>
        <li><a href="#"> Solutions </a></li>
        <li><a href="#"> Resources </a></li>
        <li><a href="#"> Docs </a></li>
        <li><a href="#"> Support </a></li>
      </ul>
    </nav>
  </div>

  <div>
    <!-- add logo, search bar and buttons (or links and style them as buttons later) -->
  </div>
</header>
```

When done, you should get something similar to this:
![](https://i1kkng.bn.files.1drv.com/y4my_WhrKPkpsURXdy9QfwVr2njh8zEP14MIQQggSlq1gLZeQaDOETtYucGikE25Z0JXub4KrrC4uKCHd0smND3068teDNY5zDKgM59saRN04xQd1e-aFKgUy9Lh9xPXZsiD9sketHzoMTbGljGaxqBT9D51Oeea_4z705FjXeL4cOyybtfFlw1dPk4SeBT1WWlGJ10grhhfSPtdVi8eYmRig?width=1416&height=1126&cropmode=none)

You're ready to move to the next iteration. :raised_hands:

#### HTML 2 | Content Sections

Take a look at the image with market HTML elements on it one more time, and you can see we have three sections below the header. Create `section` tags and give each of them `id`s so you can identify them quickly.

The content for each of these sections is already in the _index.html_ but you have to organize it properly making sure there are headings, paragraphs, divs, etc.

**All images can be found in your `images` folder!**

You can see the final result on the gif at the beginning of this exercise.

The time has come! Let's add some styles and make it pretty! :nail_care:

### Part II - CSS/styles

#### CSS 1 | Setup

As you might recall, the first thing we have to do to add styles to our page is to create a `style.css` file and link it to our `index.html`.

So let's begin by creating a new file, in the same folder as our HTML file, and name it `style.css`. Now, link the file to the _index.html_.

_Hint_: In case you need to refresh your memory on how to do this, check _Introduction to CSS_ lesson.

_Hint2_: You might want to consider adding the following line to your CSS, just to confirm that you have linked it correctly:

```css
body {
  background-color: red;
}
```

Refresh the page in Chrome, and if your _style.css_ is linked properly, the page should turn red. (*You can delete the *background-color* property we added as a test once you have confirmed it's working.*) :wink:

:::info
Before we move forward, add at the very top of your _style.css_ file the following lines:

```css
@import url("https://fonts.googleapis.com/css?family=Poppins");

body {
  font-family: "Poppins";
}
```

:::

This will be the default font you will be using on the entire webpage.

Now we are ready to start adding some styles to our page.

#### CSS 2 | The Header and the navbar

In the first part of this exercise, you created the header and inside it the navbar. Now we have to add some styles to make it more like this:

![](https://ilkcng.bn.files.1drv.com/y4m6QVvhtgzJoBCQ_KtAAWCPb_LBNNGHx924XIQUp6wk5kQ8DNgHo68ZbufSvpjbzNmfA4b8P867jMXXYNJgHGZ12zF_vhB1YG-qPwZY3hwL3mVFhyZvAUa-fQCDihA8F3SfLnNXAljiZ-vEWbNr-hOL4IPee5ZJR2hkZTVKtFHkSdjNiDFjrwOJ_NyxaFBCOwuO7ThXvcsjY970QI-6HMFAg?width=1343&height=231&cropmode=none)

We'll help you style the part of the code we previously provided for you - the upper _div_ of the _header_ tag.

```css
header > div {
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
}

nav {
  width: 600px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: black;
}

.blackHeart {
  width: 20px;
  margin-right: 1rem;
}
```

_Useful information_:

- _form label color_: rgba(0,0,0,.05)
- _form input color_: rgba(0,0,0,.05)
- _form button background color_: #fb3e44
- _form button letters color_: white

As you can see, a lot of _flexbox_ is involved - if needed, revise the lesson again or sneak peek into the official docs (use your Google skills) or use this [resource](https://flexbox.help/) as a help.

Make sure to use flexbox at any time where you need to position elements on a specific place - practice as much as possible: the more you understand now, the easier will be later.

#### CSS 3 | section 1

![](https://jfkdng.bn.files.1drv.com/y4mzOyjw3kqXQg3nTxbTjuC894f48nIFHQu0VQKSkMtlnMPSHBkBaK3uwYGfdmhu2mMlgLpDOspKEHcDD_x-F1DF8oUbE-onEwyLTpUNFBcxJcswDb_l_NsV_Ev5lKP_RSC9-WQWbKLfSG7YEBN0TOfjDyXc_tUcvS1uhClPi1hWh2RiLOKFVyrB6eX8s123to5CIbV1-ie0vvOIIqynWPDcQ?width=1353&height=665&cropmode=none)

In this section, as you can see everything is _centered_. You can add some flexbox rules to the _id_ you attached to this section such is _display: flex;_ and _justify-content: center;_. But this is just the beginning - you still have to set _align-items_ and _flex-direction_.

_Useful information_:

- background image is inside the assets folder.

#### CSS 4 | section 2

![](https://jfkcng.bn.files.1drv.com/y4mFB6mDVX6J_QjQVZu7FWI62rOk4AoJ7zLJOpPqORJ8oWzHiBbEYQLmCL8PTFyW-shO5bJVjspXJOkj7BclLx6RzByqbZ56s_poyYCEr1OXVQY_xGoNzxw_y-sxvyC7f0rJowqVvdlTM40J84uzHOrIFl9W2XVfoo_yRffbluOOSOt7IVWDhRvXsUE1ge8ytNEqjQ4zcZBSyZKUJHB3W6ruw?width=1342&height=521&cropmode=none)

This section has pretty much the same layout as the previous - some code to be reused :wink:.

Again use a lot of flexbox to get the right position of elements - direction, justify-content, align-items.

**Inspect elements to get the right size of the font for each of them**. However, this is not a crucial thing, so don't spend too much time on it - focus on positioning primary.

#### CSS 5 | section 3

![](https://jfkbng.bn.files.1drv.com/y4muKKDFqdl9Nx5-smP15fV5gpOxfOITKgZfCprN-4VgssGJor5DxtsLdkkIkN0qRZNSujwfZPjwoTs69eW0W2WX2SnRawSoWu5yEiKz81OQZm7C2iV7pQnDWNd4ap5z64AVrA3PQrQrIBs-TsPr53TN_TD0Raw_iGUfHMRCPmh8fXUW_E5t83J-uvQX2A73V8oHqgQZp79o0u2mg1p7oU9SQ?width=1346&height=444&cropmode=none)

#### CSS 6 | section 4

![](https://jfkang.bn.files.1drv.com/y4m86eISxpwtCD7HHun540D_TRoLKCV3MLPxOzBgOvkD2eBGFHDjz24s5QkMnmnDFi3KkN6IjLpxIjzuLFFjNxh3ABVCB0713sJxV8EZ-8i0K1NbmGj5OLGJAoO1yb_THY80ushGtynjdImqQ9yxHTPK60RI8izJ5SYfJtixg2gC2lwAxM9bgSUgLBhFU8r2-v4TapfdfwHkpJYwecRFl8dHA?width=1347&height=326&cropmode=none)

#### CSS 7 | section 5

![](https://jfjqng.bn.files.1drv.com/y4mt88RWimlHj8iihCWedLjY8RyBzO4rn5h9JEYVjdCtXEbRtvbtqKcmk-kAWDhNwClt44zS-l1u9KM4VTrCqLl-EyixGiDrnpaEumYXWlc33goduuHTb8RScZFUrBNR-bqpdNWN8ZeRxLQSzEogXa3cU0Noi95U92ocx7Z8VPshkXSHDN8kA-OZ6uFHBNn8BJOPT2RypfRKo8G05XECNR8FQ?width=1348&height=176&cropmode=none)
![](https://jfjpng.bn.files.1drv.com/y4myLEYi6ScJR_Zj-Sy8kf3D7AyGLDwSr2TajDTJIwXAp3difAZb9eqRmK3R5i6GhDn8G32zmawWd-D3IECCDcynwaN0PdFJCdwkuqkpIXzMXTs12rawBQl6-kiF6U4QVqpFYFVj9KJJKyyJzPR7E_UJiZQisjcGuEn2BoXqvPEWSHgwrarPXH8RwpQec4bevyo9pBEqcmB2d-0rGy_D_O1KA?width=1345&height=662&cropmode=none)

#### CSS 8 | section 6

![](https://jfj9ng.bn.files.1drv.com/y4mxCTWRZpLvcD2WGtO2QEuSdtWPtXg6o5Q9dk06Jy6nzqGmO8pCR9L8Ly1RoGkELEKZReKEUy5YK6JHF2gMUh-WjKEWcdYDDQUtGJYfLvkaYMZeaG2AYY5t6hDPIy6h1QBPIZV1PgRG2ikVH-uPzOzIuN6R9wUkGMd2dSvl5TFwu3y9lMn6WCrDGhQj8sEzJPPz1y3Q5USafiIH8u1J0xOaA?width=1348&height=402&cropmode=none)

## Submission

If you didn't [add, commit and push the changes](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) you made, this is the last call. :smile:

And at the same time, if you didn't [create a pull request](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm) this is the time for that as well.

Your TAs will check up your work and provide feedback.

**Once again, a friendly reminder**: You don't have to wait to finish everything in order to follow the steps listed in the [guidelines](https://github.com/FACEPrep-ProGrad/project-builder-html-css-npm). In a moment when you've made a first significant step in working on this assessment, we advise you to make a pull request. Starting from that moment, every change you make will be automatically added to that pull request and will be visible to your TAs for a checkup.

## Summary

In this exercise, you've built a clone of a piece of the npm home page. This site is very complex so if you managed to make it look anything like the original, good job! :trophy:

This concludes the HTML / CSS module. We are proud of you!

Happy Coding ProGrad ❤️!
