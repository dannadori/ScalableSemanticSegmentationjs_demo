(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{163:function(e,s,a){e.exports=a(292)},168:function(e,s,a){},170:function(e,s,a){},292:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a.n(t),r=a(32),o=a.n(r),n=(a(168),a(17)),d=a.n(n),f=a(28),b=a(132),g=a(133),i=a(153),u=a(151),m=(a(170),a(300)),j=a(152),p={SPLIT_MARGIN:.2,SPLIT_WIDTH:300,SPLIT_HEIGHT:300,TRANSFORMED_WIDTH:300,TRANSFORMED_HEIGHT:300,TRANSFORMED_MAX:300,CROP_MARGIN:20,SS_MODEL_PATH:"/WEB_MODEL/icnet_0300x0300_0.10/model.json",SS_MODEL_PATHS:["/WEB_MODEL/icnet_0300x0300_0.10/model.json","/WEB_MODEL/icnet_0300x0300_0.30/model.json","/WEB_MODEL/icnet_0300x0300_0.50/model.json","/WEB_MODEL/icnet_0300x0300_0.70/model.json","/WEB_MODEL/icnet_0300x0300_0.90/model.json","/WEB_MODEL/icnet_0300x0300_1.00/model.json"]},h={QVGA:{facingMode:"environment",width:{exact:320},height:{exact:240}},VGA:{facingMode:"environment",width:{exact:640},height:{exact:480}},HD:{facingMode:"environment",width:{exact:1280},height:{exact:720}},FULLHD:{facingMode:"environment",width:{exact:1920},height:{exact:1080}},FourK:{facingMode:"environment",width:{ideal:2500,max:4096},height:{ideal:1600,max:4096}},EightK:{facingMode:"environment",width:{ideal:7680},height:{ideal:4320}}},I={VGA:h.VGA,HD:h.HD,FULLHD:h.FULLHD};var l=function(e){var s=document.createElement("canvas");return s.width=e.videoWidth,s.height=e.videoHeight,s.getContext("2d").drawImage(e,0,0,s.width,s.height),s},v=function(e){var s=document.createElement("canvas");return s.width=e.width,s.height=e.height,s.getContext("2d").drawImage(e,0,0,s.width,s.height),s},M=a(86),k=["/resources/testImages/0033e2644a1321f8d6342d5106bc21f38e21746f.json.jpg","/resources/testImages/00483f198527d7d6ebccba4140833832dcfe061d.json.jpg","/resources/testImages/02f372109d86e514aa6737012a653ccd9a77478d.json.jpg","/resources/testImages/02fad4b1f92ae4505b97a99d6c07660c472ab61f.json.jpg","/resources/testImages/07a06e8af65157904033f91a5b4158981c3ede66.json.jpg","/resources/testImages/095051e2e7eef590a1affcf31e9f7673f69b8368.json.jpg","/resources/testImages/0a9e3e9952c50ca349d8b83f6787d560101b8fff.json.jpg","/resources/testImages/0acb2188b2f4ca432a36fb98e16f9f6f8a950f15.json.jpg","/resources/testImages/0ad80c8bcfd3c937dc95bb4ea3363ca2f3f011e1.json.jpg","/resources/testImages/0aee33128f3e845c895ec0bd31e20ab1a07f7bfe.json.jpg","/resources/testImages/0de60b1f25ec2faed974ffdbe13e5b5b6459a32e.json.jpg","/resources/testImages/0f56498f73022dbd3eefd611305491d1904d4b93.json.jpg","/resources/testImages/0fcc2cab3a01be9dd830560d573e221df2760c64.json.jpg","/resources/testImages/115169170bd1808ecbc51eb568da105455e42418.json.jpg","/resources/testImages/1558ecdb6ea45f2b2b0b630d4e84b2f7be95cfc2.json.jpg","/resources/testImages/1643a0c4c81bc839c79380f56e520e4013ddeca5.json.jpg","/resources/testImages/16764124edc600e32877a2317e0d3f4f755eadc7.json.jpg","/resources/testImages/1750c7b629ecf0dd537fb590693521e83d4c9b45.json.jpg","/resources/testImages/1aa907f42c7a5afa639f9ad388aa2e484f637453.json.jpg","/resources/testImages/1dfc52fa8e448f774932c30c666ebb0d67c047dd.json.jpg","/resources/testImages/203e3b2c49ca67f1290f3c1b5e232df545e2d21c.json.jpg","/resources/testImages/21bf7b206fa048a9556a92c5f34d1b547edda5f2.json.jpg","/resources/testImages/224f6ae289228268a0e47892977fbf05def33497.json.jpg","/resources/testImages/226f33c2693115d470033a7c19505b9c1fe65dd1.json.jpg","/resources/testImages/22e6dd6abc7697eebb8fc2337e9b54df0db077cc.json.jpg","/resources/testImages/22e86144a50d2c93fc8e9d167e3f6fc55eb17633.json.jpg","/resources/testImages/24618b633d215a27cfc14c98ec6ab9c94cec03a9.json.jpg","/resources/testImages/252796192326010c2db8c5038a2160a7880d53e7.json.jpg","/resources/testImages/259b69215600ae11bac3e7c3c5efb8732a085ee6.json.jpg","/resources/testImages/25eab551f2419571655a5b0b861d74d917a275bc.json.jpg","/resources/testImages/266e4f43990de072d752d948ffcd1415a1426186.json.jpg","/resources/testImages/26d7dca6b835f411ad1c6624e496eefb7ac56466.json.jpg","/resources/testImages/29e05a3459c6ef95a0cd9597b9c28f8e862ee697.json.jpg","/resources/testImages/2a20851c7ced38cf90965acfa1737358cacfd8c0.json.jpg","/resources/testImages/2fdb5489304bfdd0f5b17dd7e7a891c1d5416bfd.json.jpg","/resources/testImages/30670a1249b315751d919dd94b3158de4d6cd283.json.jpg","/resources/testImages/3125e80b2ce6b84449a04005004e2d3a99af71fd.json.jpg","/resources/testImages/340da28fed7c43921dd9b4f85718fa7a40e7b6c9.json.jpg","/resources/testImages/35622d144d57a98ae7f97b59793b20c161efd2b8.json.jpg","/resources/testImages/366a87ba7e76e51399bb1ace1ebe0f408bb5284c.json.jpg","/resources/testImages/38728b52840bf6d1d67aa541a15814238f5eed90.json.jpg","/resources/testImages/397cbb0df1b8b131794d5788e3f3abc094ffbb7d.json.jpg","/resources/testImages/398aba98207fb4676c2c8863cf861ea41ec20c41.json.jpg","/resources/testImages/3cfc556e79ed61438e82704addcb85584ab41249.json.jpg","/resources/testImages/3e690f21776b01e61ec9d46b0fdde4816013d156.json.jpg","/resources/testImages/3fc23ece0fee92b90c38bac23c9d8d27e6e53807.json.jpg","/resources/testImages/40477824c3f1520fa66d1e8a0243db04a6e310a0.json.jpg","/resources/testImages/40ab05acf02d2c369894dcafbdd92ef943337ee6.json.jpg","/resources/testImages/4335b08a42d7c36b911cb70b8b19c7445cb95381.json.jpg","/resources/testImages/45401bf82b47ce3c4222e72f48079127ed856cb4.json.jpg","/resources/testImages/457bfdf7d3ff9d3600310fb39c8effa603dd9881.json.jpg","/resources/testImages/47ea45702ffa839fb0fcfc3966e024fc1ca7fd57.json.jpg","/resources/testImages/480304285d3cabf86e35be253cb3a99a45ee785f.json.jpg","/resources/testImages/49d6fb52998678b84d0ac20a21b0d684d3bd07bd.json.jpg","/resources/testImages/4b938187d9612ea0ced31012fd11a99777ad6dda.json.jpg","/resources/testImages/4ba51334134603f2d412cea9692e2cb06551aabb.json.jpg","/resources/testImages/4c1a78fdcbbb121536ecffc6ceffaaf9493441c5.json.jpg","/resources/testImages/4f63da8aa82db7dff78536742053b9f2fe908399.json.jpg","/resources/testImages/4feb6aee5e43d859d7fb9ed5ba4d156bfd7a118e.json.jpg","/resources/testImages/529f576df815b29eb70daf70f67d4f3bb32a1849.json.jpg","/resources/testImages/588df6d5ef44d3830a4f5b9fb737aef7dde482fc.json.jpg","/resources/testImages/59382fc229589bd743815d18998bd037810d3569.json.jpg","/resources/testImages/5cbb10e58a0ba637ac97c38ac6c1999fee52ea98.json.jpg","/resources/testImages/5ccf093500ede4566ad9eb129437915072b17ce5.json.jpg","/resources/testImages/6150c9d7c12aea8906e52eb1890d22cac7cd742a.json.jpg","/resources/testImages/633997846bbd5ddc43cad09b33a47d8406e27fe1.json.jpg","/resources/testImages/63eed9b33fae66df7b7ec5697d686a5b1fac69a6.json.jpg","/resources/testImages/692b5b5a264549f9e83333c3cdf0468a32bbb2d4.json.jpg","/resources/testImages/6b18574f279a05100a2f7c927fb431743d256e93.json.jpg","/resources/testImages/7338223f39b2d6c22a7d31d271457d26c8b876ca.json.jpg","/resources/testImages/74fcf465a9ff02d7b11fb3a4af93e67735b8f64d.json.jpg","/resources/testImages/77389ff4df90b2c983c69dbc8a4e30eb88d24f56.json.jpg","/resources/testImages/7771d36bfced1e1abe7b12687b9759e13740223e.json.jpg","/resources/testImages/79fde7fdeae615e1f6784b6f748e79f3ac583cfb.json.jpg","/resources/testImages/7e29873b2b15b03d9c986b63e2c30509795655b1.json.jpg","/resources/testImages/7f1176caafc81f8dba18cda7dc82f0ce8c18f6f1.json.jpg","/resources/testImages/8165e06e3fbaec3cd5a2917abd87049bb89a5f74.json.jpg","/resources/testImages/860ca252d98e065a3b473aad0b67792a05e5d83e.json.jpg","/resources/testImages/8774be6e0fb5773302fac64f04b3b249d9b76b0d.json.jpg","/resources/testImages/89f132153617345ccc8d42ed769b44fd9a49000f.json.jpg","/resources/testImages/8b93aa4cc6d628cfb9effb7ebaf4d873eaf88057.json.jpg","/resources/testImages/8cf58ff0cebab69b0bfe85b11983ce8e35255cd8.json.jpg","/resources/testImages/8d10f9f51b27e396a7b3992120a4200f1f0f842a.json.jpg","/resources/testImages/8f410f81ad98677d734cfb38ee01d89844938c6f.json.jpg","/resources/testImages/92d53148485ad3cfcab0865bef1ff6fbb638947c.json.jpg","/resources/testImages/95c35067604044a36bdc64426863280a2e3d76cf.json.jpg","/resources/testImages/968607af4fdd70beb1bfdcc69d571b1d1490bba1.json.jpg","/resources/testImages/9722798a981ead134eaddf3f82a9918168a525b9.json.jpg","/resources/testImages/9af485df330466e122c032d1de19d89fdb7c0374.json.jpg","/resources/testImages/9fc4584af0368567a345453acec06885214340f7.json.jpg","/resources/testImages/a0ecb685cd5672ef4be925e54aa18761f5f62622.json.jpg","/resources/testImages/a2759529e490ec46649a5a06f34b57664958c7d9.json.jpg","/resources/testImages/a3423c522b642c3ac0afe979a7ac7e8e19d8344e.json.jpg","/resources/testImages/aaf65f81f725a015a32d04b3212b8ead216fbb72.json.jpg","/resources/testImages/ae270a68f86f57f3fb034b7a8858e0907b84120a.json.jpg","/resources/testImages/af0ce47f0dc7de94af1155ee118b3f991b2e2638.json.jpg","/resources/testImages/b1074fda6de0602851f62b9b82e7dc7fc4597de8.json.jpg","/resources/testImages/b40509b3a03090bc7172398e56f6a02e047878b4.json.jpg","/resources/testImages/b67b9436391f0c40d475486ca242d5700db38ba8.json.jpg","/resources/testImages/b87444179c74818382832d21e498d569d5e8705f.json.jpg","/resources/testImages/b9a9aadc90af955668b9c4f312ec1aafced31ce9.json.jpg","/resources/testImages/ba024c98c7f16da4ff4b40dcdba399063f9ff478.json.jpg","/resources/testImages/bcc4938dffe361d8da6dfad3e2a7099b0790f9ae.json.jpg","/resources/testImages/bfa8404aaa1c1b68d7d6b8fb46a0496474815f33.json.jpg","/resources/testImages/c113c3e6f4245f4b3c41ec84ebce63295eb8dc57.json.jpg","/resources/testImages/c1589b694feee0dc0b2f1128979149b7da5e3c6e.json.jpg","/resources/testImages/c1688e48a7c5757faa498016a9ad68d818926c39.json.jpg","/resources/testImages/c2c1f8000d0f36638a581d8f59ef7285c08e1eae.json.jpg","/resources/testImages/c334a8d67308b82a1acda510a54b8b8fd5608bc7.json.jpg","/resources/testImages/c486206fde8580f87f00c3442b87076c912ac88f.json.jpg","/resources/testImages/c59f1dfc5c57de8812a43aaac549cac1a2b37de2.json.jpg","/resources/testImages/c624c11b61d1c94304384401e54f5b5121536bd4.json.jpg","/resources/testImages/c68d64352109db77c5305c5f974f1f2d76a3cc65.json.jpg","/resources/testImages/c9e1ba07601cb158fc0714824a3d0e1b0b633713.json.jpg","/resources/testImages/cf5c47c09e7629c7e72bcbcf3efdde0ca4a40ce4.json.jpg","/resources/testImages/cf9d9783a59efdd0512082c45208662ca4798329.json.jpg","/resources/testImages/d0d4731a79791688529db4c1c5d9ad691d6e1925.json.jpg","/resources/testImages/d2269bb4ba9b6eedc8945e461e94509cac441dcd.json.jpg","/resources/testImages/d29ea7e8f28d8865085af1e5b7bf4495c51ef3d2.json.jpg","/resources/testImages/d3c3657411e0db4890e15a4b4e3ee598eb824f07.json.jpg","/resources/testImages/d52c4c20395ce59217fd2294f7f72b95c53246d0.json.jpg","/resources/testImages/d917739e7078e3e563f379798d33fc9823b1d9a4.json.jpg","/resources/testImages/d93dcc8d535740f7b954b706c41eb0532c35ad6a.json.jpg","/resources/testImages/d94960dea5c4710cccc8bd39b2bdf930ee3e2c5a.json.jpg","/resources/testImages/da8b2346899bc0bd9fd9a1bc566adbdce2ef6533.json.jpg","/resources/testImages/db7242878adbbb12af019fadbf97853712a641cb.json.jpg","/resources/testImages/de9e10c23fc244d367bec350410fbc261c29671d.json.jpg","/resources/testImages/dfc6c050a267f507a112b8c7f00eb987b603e968.json.jpg","/resources/testImages/e08b71407038eaaa8489ad159047411bd5dba1f3.json.jpg","/resources/testImages/e565a44a729a3e82f60021712bb5564832409863.json.jpg","/resources/testImages/e5a3cd80a19c28dfc78f578b2a0c06a8a1c52d00.json.jpg","/resources/testImages/e5bdb8e2c09b388a25424e6b8c34f3e6bbc83ed3.json.jpg","/resources/testImages/ebca4151ac8c30368bc6c7c0f5e4d05c968c024c.json.jpg","/resources/testImages/ec2aa76b48dbb04f38df35bb51317b6d647d1978.json.jpg","/resources/testImages/f26ff4119b5c5ab9cf80b73d52043857c2095e48.json.jpg","/resources/testImages/f2bee345300d2602fb4a7a871a3621c28f3b1e59.json.jpg","/resources/testImages/f703f372fe6062c56f44c009a1b5670f6253fecf.json.jpg","/resources/testImages/f7211989a5b9ee0e4197e7683f5ef8de76a8de82.json.jpg","/resources/testImages/f9075d8df2c74b86c240f2d5097c541f00f7ac64.json.jpg","/resources/testImages/fb868ccf7a7a57baedbd452f6a1ab8efe4f26832.json.jpg"],w=["/resources/testImageMasks/0033e2644a1321f8d6342d5106bc21f38e21746f.json.png","/resources/testImageMasks/00483f198527d7d6ebccba4140833832dcfe061d.json.png","/resources/testImageMasks/02f372109d86e514aa6737012a653ccd9a77478d.json.png","/resources/testImageMasks/02fad4b1f92ae4505b97a99d6c07660c472ab61f.json.png","/resources/testImageMasks/07a06e8af65157904033f91a5b4158981c3ede66.json.png","/resources/testImageMasks/095051e2e7eef590a1affcf31e9f7673f69b8368.json.png","/resources/testImageMasks/0a9e3e9952c50ca349d8b83f6787d560101b8fff.json.png","/resources/testImageMasks/0acb2188b2f4ca432a36fb98e16f9f6f8a950f15.json.png","/resources/testImageMasks/0ad80c8bcfd3c937dc95bb4ea3363ca2f3f011e1.json.png","/resources/testImageMasks/0aee33128f3e845c895ec0bd31e20ab1a07f7bfe.json.png","/resources/testImageMasks/0de60b1f25ec2faed974ffdbe13e5b5b6459a32e.json.png","/resources/testImageMasks/0f56498f73022dbd3eefd611305491d1904d4b93.json.png","/resources/testImageMasks/0fcc2cab3a01be9dd830560d573e221df2760c64.json.png","/resources/testImageMasks/115169170bd1808ecbc51eb568da105455e42418.json.png","/resources/testImageMasks/1558ecdb6ea45f2b2b0b630d4e84b2f7be95cfc2.json.png","/resources/testImageMasks/1643a0c4c81bc839c79380f56e520e4013ddeca5.json.png","/resources/testImageMasks/16764124edc600e32877a2317e0d3f4f755eadc7.json.png","/resources/testImageMasks/1750c7b629ecf0dd537fb590693521e83d4c9b45.json.png","/resources/testImageMasks/1aa907f42c7a5afa639f9ad388aa2e484f637453.json.png","/resources/testImageMasks/1dfc52fa8e448f774932c30c666ebb0d67c047dd.json.png","/resources/testImageMasks/203e3b2c49ca67f1290f3c1b5e232df545e2d21c.json.png","/resources/testImageMasks/21bf7b206fa048a9556a92c5f34d1b547edda5f2.json.png","/resources/testImageMasks/224f6ae289228268a0e47892977fbf05def33497.json.png","/resources/testImageMasks/226f33c2693115d470033a7c19505b9c1fe65dd1.json.png","/resources/testImageMasks/22e6dd6abc7697eebb8fc2337e9b54df0db077cc.json.png","/resources/testImageMasks/22e86144a50d2c93fc8e9d167e3f6fc55eb17633.json.png","/resources/testImageMasks/24618b633d215a27cfc14c98ec6ab9c94cec03a9.json.png","/resources/testImageMasks/252796192326010c2db8c5038a2160a7880d53e7.json.png","/resources/testImageMasks/259b69215600ae11bac3e7c3c5efb8732a085ee6.json.png","/resources/testImageMasks/25eab551f2419571655a5b0b861d74d917a275bc.json.png","/resources/testImageMasks/266e4f43990de072d752d948ffcd1415a1426186.json.png","/resources/testImageMasks/26d7dca6b835f411ad1c6624e496eefb7ac56466.json.png","/resources/testImageMasks/29e05a3459c6ef95a0cd9597b9c28f8e862ee697.json.png","/resources/testImageMasks/2a20851c7ced38cf90965acfa1737358cacfd8c0.json.png","/resources/testImageMasks/2fdb5489304bfdd0f5b17dd7e7a891c1d5416bfd.json.png","/resources/testImageMasks/30670a1249b315751d919dd94b3158de4d6cd283.json.png","/resources/testImageMasks/3125e80b2ce6b84449a04005004e2d3a99af71fd.json.png","/resources/testImageMasks/340da28fed7c43921dd9b4f85718fa7a40e7b6c9.json.png","/resources/testImageMasks/35622d144d57a98ae7f97b59793b20c161efd2b8.json.png","/resources/testImageMasks/366a87ba7e76e51399bb1ace1ebe0f408bb5284c.json.png","/resources/testImageMasks/38728b52840bf6d1d67aa541a15814238f5eed90.json.png","/resources/testImageMasks/397cbb0df1b8b131794d5788e3f3abc094ffbb7d.json.png","/resources/testImageMasks/398aba98207fb4676c2c8863cf861ea41ec20c41.json.png","/resources/testImageMasks/3cfc556e79ed61438e82704addcb85584ab41249.json.png","/resources/testImageMasks/3e690f21776b01e61ec9d46b0fdde4816013d156.json.png","/resources/testImageMasks/3fc23ece0fee92b90c38bac23c9d8d27e6e53807.json.png","/resources/testImageMasks/40477824c3f1520fa66d1e8a0243db04a6e310a0.json.png","/resources/testImageMasks/40ab05acf02d2c369894dcafbdd92ef943337ee6.json.png","/resources/testImageMasks/4335b08a42d7c36b911cb70b8b19c7445cb95381.json.png","/resources/testImageMasks/45401bf82b47ce3c4222e72f48079127ed856cb4.json.png","/resources/testImageMasks/457bfdf7d3ff9d3600310fb39c8effa603dd9881.json.png","/resources/testImageMasks/47ea45702ffa839fb0fcfc3966e024fc1ca7fd57.json.png","/resources/testImageMasks/480304285d3cabf86e35be253cb3a99a45ee785f.json.png","/resources/testImageMasks/49d6fb52998678b84d0ac20a21b0d684d3bd07bd.json.png","/resources/testImageMasks/4b938187d9612ea0ced31012fd11a99777ad6dda.json.png","/resources/testImageMasks/4ba51334134603f2d412cea9692e2cb06551aabb.json.png","/resources/testImageMasks/4c1a78fdcbbb121536ecffc6ceffaaf9493441c5.json.png","/resources/testImageMasks/4f63da8aa82db7dff78536742053b9f2fe908399.json.png","/resources/testImageMasks/4feb6aee5e43d859d7fb9ed5ba4d156bfd7a118e.json.png","/resources/testImageMasks/529f576df815b29eb70daf70f67d4f3bb32a1849.json.png","/resources/testImageMasks/588df6d5ef44d3830a4f5b9fb737aef7dde482fc.json.png","/resources/testImageMasks/59382fc229589bd743815d18998bd037810d3569.json.png","/resources/testImageMasks/5cbb10e58a0ba637ac97c38ac6c1999fee52ea98.json.png","/resources/testImageMasks/5ccf093500ede4566ad9eb129437915072b17ce5.json.png","/resources/testImageMasks/6150c9d7c12aea8906e52eb1890d22cac7cd742a.json.png","/resources/testImageMasks/633997846bbd5ddc43cad09b33a47d8406e27fe1.json.png","/resources/testImageMasks/63eed9b33fae66df7b7ec5697d686a5b1fac69a6.json.png","/resources/testImageMasks/692b5b5a264549f9e83333c3cdf0468a32bbb2d4.json.png","/resources/testImageMasks/6b18574f279a05100a2f7c927fb431743d256e93.json.png","/resources/testImageMasks/7338223f39b2d6c22a7d31d271457d26c8b876ca.json.png","/resources/testImageMasks/74fcf465a9ff02d7b11fb3a4af93e67735b8f64d.json.png","/resources/testImageMasks/77389ff4df90b2c983c69dbc8a4e30eb88d24f56.json.png","/resources/testImageMasks/7771d36bfced1e1abe7b12687b9759e13740223e.json.png","/resources/testImageMasks/79fde7fdeae615e1f6784b6f748e79f3ac583cfb.json.png","/resources/testImageMasks/7e29873b2b15b03d9c986b63e2c30509795655b1.json.png","/resources/testImageMasks/7f1176caafc81f8dba18cda7dc82f0ce8c18f6f1.json.png","/resources/testImageMasks/8165e06e3fbaec3cd5a2917abd87049bb89a5f74.json.png","/resources/testImageMasks/860ca252d98e065a3b473aad0b67792a05e5d83e.json.png","/resources/testImageMasks/8774be6e0fb5773302fac64f04b3b249d9b76b0d.json.png","/resources/testImageMasks/89f132153617345ccc8d42ed769b44fd9a49000f.json.png","/resources/testImageMasks/8b93aa4cc6d628cfb9effb7ebaf4d873eaf88057.json.png","/resources/testImageMasks/8cf58ff0cebab69b0bfe85b11983ce8e35255cd8.json.png","/resources/testImageMasks/8d10f9f51b27e396a7b3992120a4200f1f0f842a.json.png","/resources/testImageMasks/8f410f81ad98677d734cfb38ee01d89844938c6f.json.png","/resources/testImageMasks/92d53148485ad3cfcab0865bef1ff6fbb638947c.json.png","/resources/testImageMasks/95c35067604044a36bdc64426863280a2e3d76cf.json.png","/resources/testImageMasks/968607af4fdd70beb1bfdcc69d571b1d1490bba1.json.png","/resources/testImageMasks/9722798a981ead134eaddf3f82a9918168a525b9.json.png","/resources/testImageMasks/9af485df330466e122c032d1de19d89fdb7c0374.json.png","/resources/testImageMasks/9fc4584af0368567a345453acec06885214340f7.json.png","/resources/testImageMasks/a0ecb685cd5672ef4be925e54aa18761f5f62622.json.png","/resources/testImageMasks/a2759529e490ec46649a5a06f34b57664958c7d9.json.png","/resources/testImageMasks/a3423c522b642c3ac0afe979a7ac7e8e19d8344e.json.png","/resources/testImageMasks/aaf65f81f725a015a32d04b3212b8ead216fbb72.json.png","/resources/testImageMasks/ae270a68f86f57f3fb034b7a8858e0907b84120a.json.png","/resources/testImageMasks/af0ce47f0dc7de94af1155ee118b3f991b2e2638.json.png","/resources/testImageMasks/b1074fda6de0602851f62b9b82e7dc7fc4597de8.json.png","/resources/testImageMasks/b40509b3a03090bc7172398e56f6a02e047878b4.json.png","/resources/testImageMasks/b67b9436391f0c40d475486ca242d5700db38ba8.json.png","/resources/testImageMasks/b87444179c74818382832d21e498d569d5e8705f.json.png","/resources/testImageMasks/b9a9aadc90af955668b9c4f312ec1aafced31ce9.json.png","/resources/testImageMasks/ba024c98c7f16da4ff4b40dcdba399063f9ff478.json.png","/resources/testImageMasks/bcc4938dffe361d8da6dfad3e2a7099b0790f9ae.json.png","/resources/testImageMasks/bfa8404aaa1c1b68d7d6b8fb46a0496474815f33.json.png","/resources/testImageMasks/c113c3e6f4245f4b3c41ec84ebce63295eb8dc57.json.png","/resources/testImageMasks/c1589b694feee0dc0b2f1128979149b7da5e3c6e.json.png","/resources/testImageMasks/c1688e48a7c5757faa498016a9ad68d818926c39.json.png","/resources/testImageMasks/c2c1f8000d0f36638a581d8f59ef7285c08e1eae.json.png","/resources/testImageMasks/c334a8d67308b82a1acda510a54b8b8fd5608bc7.json.png","/resources/testImageMasks/c486206fde8580f87f00c3442b87076c912ac88f.json.png","/resources/testImageMasks/c59f1dfc5c57de8812a43aaac549cac1a2b37de2.json.png","/resources/testImageMasks/c624c11b61d1c94304384401e54f5b5121536bd4.json.png","/resources/testImageMasks/c68d64352109db77c5305c5f974f1f2d76a3cc65.json.png","/resources/testImageMasks/c9e1ba07601cb158fc0714824a3d0e1b0b633713.json.png","/resources/testImageMasks/cf5c47c09e7629c7e72bcbcf3efdde0ca4a40ce4.json.png","/resources/testImageMasks/cf9d9783a59efdd0512082c45208662ca4798329.json.png","/resources/testImageMasks/d0d4731a79791688529db4c1c5d9ad691d6e1925.json.png","/resources/testImageMasks/d2269bb4ba9b6eedc8945e461e94509cac441dcd.json.png","/resources/testImageMasks/d29ea7e8f28d8865085af1e5b7bf4495c51ef3d2.json.png","/resources/testImageMasks/d3c3657411e0db4890e15a4b4e3ee598eb824f07.json.png","/resources/testImageMasks/d52c4c20395ce59217fd2294f7f72b95c53246d0.json.png","/resources/testImageMasks/d917739e7078e3e563f379798d33fc9823b1d9a4.json.png","/resources/testImageMasks/d93dcc8d535740f7b954b706c41eb0532c35ad6a.json.png","/resources/testImageMasks/d94960dea5c4710cccc8bd39b2bdf930ee3e2c5a.json.png","/resources/testImageMasks/da8b2346899bc0bd9fd9a1bc566adbdce2ef6533.json.png","/resources/testImageMasks/db7242878adbbb12af019fadbf97853712a641cb.json.png","/resources/testImageMasks/de9e10c23fc244d367bec350410fbc261c29671d.json.png","/resources/testImageMasks/dfc6c050a267f507a112b8c7f00eb987b603e968.json.png","/resources/testImageMasks/e08b71407038eaaa8489ad159047411bd5dba1f3.json.png","/resources/testImageMasks/e565a44a729a3e82f60021712bb5564832409863.json.png","/resources/testImageMasks/e5a3cd80a19c28dfc78f578b2a0c06a8a1c52d00.json.png","/resources/testImageMasks/e5bdb8e2c09b388a25424e6b8c34f3e6bbc83ed3.json.png","/resources/testImageMasks/ebca4151ac8c30368bc6c7c0f5e4d05c968c024c.json.png","/resources/testImageMasks/ec2aa76b48dbb04f38df35bb51317b6d647d1978.json.png","/resources/testImageMasks/f26ff4119b5c5ab9cf80b73d52043857c2095e48.json.png","/resources/testImageMasks/f2bee345300d2602fb4a7a871a3621c28f3b1e59.json.png","/resources/testImageMasks/f703f372fe6062c56f44c009a1b5670f6253fecf.json.png","/resources/testImageMasks/f7211989a5b9ee0e4197e7683f5ef8de76a8de82.json.png","/resources/testImageMasks/f9075d8df2c74b86c240f2d5097c541f00f7ac64.json.png","/resources/testImageMasks/fb868ccf7a7a57baedbd452f6a1ab8efe4f26832.json.png"],S=function(e){Object(i.a)(a,e);var s=Object(u.a)(a);function a(){var e;Object(b.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=s.call.apply(s,[this].concat(r))).state={count:0,videoResolution:"VGA",colnum:1,rownum:1,showRect:!0,showSS:!1,showGrid:!1,initialized:!1,testMode:!1,testIndex:0,autoTest:!1,autoTestIndex:0,autoTestIOU:[]},e.parentRef=c.a.createRef(),e.videoRef=c.a.createRef(),e.imgCanvasRef=c.a.createRef(),e.labelImgCanvasRef=c.a.createRef(),e.controllerCanvasRef=c.a.createRef(),e.controllerDivRef=c.a.createRef(),e.workerSSMaskMonitorCanvasRef=c.a.createRef(),e.statusCanvasRef=c.a.createRef(),e.videoHeight=0,e.videoWidth=0,e.parentHeight=0,e.parentWidth=0,e.overlayWidth=0,e.overlayHeight=0,e.overlayXOffset=0,e.overlayYOffset=0,e.scalableSS=new M.ScalableSemanticSegmentation,e.frameToCalc=10,e.frame=0,e.startTime=0,e.showFPS=function(){if(e.frame+=1,e.frame>=e.frameToCalc){var s=(performance.now()-e.startTime)/1e3,a=Math.ceil(e.frameToCalc/s*10)/10,t="FPS: ".concat(a);e.showStatus(e.STATUS_FPS,t),e.frame=0,e.startTime=performance.now()}},e.modelPath="",e.showCondition=function(){var s="".concat(e.state.videoResolution,", ").concat(e.state.colnum,", ").concat(e.state.rownum,", ").concat(e.modelPath);e.showStatus(e.STATUS_CONDITION,s)},e.changeCameraResolution=function(s){if(e.videoRef.current.srcObject.getTracks().map((function(e){return e.stop()})),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var a=navigator.mediaDevices.getUserMedia({audio:!1,video:I[s]}).then((function(s){return console.log(e.videoRef),e.videoRef.current.srcObject=s,new Promise((function(s,a){e.videoRef.current.onloadedmetadata=function(){s()}}))}));Promise.all([a]).then((function(a){console.log("Camera and model ready!");var t=e.videoRef.current;e.checkParentSizeChanged(t),e.setState({videoResolution:s})})).catch((function(e){console.error(e)}))}},e.requestScanBarcode=Object(f.a)(d.a.mark((function s(){var a,t,c;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log("requestScanBarcode"),a=e.videoRef.current,(t=e.controllerCanvasRef.current).width=e.overlayWidth,t.height=e.overlayHeight,0!==(c=l(a)).width){s.next=10;break}return c.remove(),window.requestAnimationFrame(e.requestScanBarcode),s.abrupt("return");case 10:e.scalableSS.predict(c,e.state.colnum,e.state.rownum),c.remove();case 12:case"end":return s.stop()}}),s)}))),e.STATUS_FPS=1,e.STATUS_CONDITION=2,e.STATUS_IOU=3,e.STATUS_IOU_SUM=4,e.showStatus=function(s,a){var t=50+37*s,c=e.statusCanvasRef.current.getContext("2d");c.font="32px sans-serif",c.textBaseline="top";var r=c.measureText(a).width+3;c.clearRect(10,t,r,37),c.fillStyle="#22222277",c.fillRect(10,t,r,37),c.fillStyle="#DD3333cc",c.fillText(a,10,t)},e.autoTest=function(){var s=Object(f.a)(d.a.mark((function s(a){var t,c;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=a?0:e.state.autoTestIndex+1,c=a?[]:e.state.autoTestIOU,!(t>=k.length)){s.next=7;break}return console.log("fin"),console.log(c),e.setState({autoTest:!1}),s.abrupt("return");case 7:return s.next=9,e.requestScanBarcodeWithImage(t);case 9:e.setState({autoTestIndex:t,autoTestIOU:c});case 10:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.requestScanBarcodeWithImage=function(){var s=Object(f.a)(d.a.mark((function s(a){var t;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:(t=document.createElement("img")).src=k[a],t.onload=function(s){e.imgCanvasRef.current.width=t.width,e.imgCanvasRef.current.height=t.height,e.imgCanvasRef.current.getContext("2d").drawImage(t,0,0,e.imgCanvasRef.current.width,e.imgCanvasRef.current.height);var a=v(t);e.scalableSS.predict(a,e.state.colnum,e.state.rownum),a.remove(),t.remove()};case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.evaluate_masksize=function(){var s=Object(f.a)(d.a.mark((function s(a,t){var c,r,o,n,f,b,g,i,u,m,j,p,h,I,l,v,M,k,S,y,R;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c=new Promise((function(e,s){var a=new Image;a.onload=function(){e(a)},a.onerror=function(e){s(e)},a.src=w[t]})),s.next=3,Promise.resolve(c);case 3:for(r=s.sent,(o=document.createElement("canvas")).width=a.width,o.height=a.height,(n=o.getContext("2d")).drawImage(a,0,0,a.width,a.height),f=n.getImageData(0,0,a.width,a.height),(b=document.createElement("canvas")).width=a.width,b.height=a.height,(g=b.getContext("2d")).drawImage(r,0,0,a.width,a.height),i=g.getImageData(0,0,a.width,a.height),u=0;u<i.data.length;u+=4)1===i.data[u]&&(i.data[u+1]=255),i.data[u+3]=128;(m=document.createElement("canvas")).width=i.width,m.height=i.height,m.getContext("2d").putImageData(i,0,0),e.labelImgCanvasRef.current.getContext("2d").clearRect(0,0,e.labelImgCanvasRef.current.width,e.labelImgCanvasRef.current.height),e.labelImgCanvasRef.current.getContext("2d").drawImage(m,0,0,e.labelImgCanvasRef.current.width,e.labelImgCanvasRef.current.height),r.remove(),o.remove(),b.remove(),m.remove(),j=0,p=0,h=0,I=0,l=0;case 32:if(!(l<f.data.length)){s.next=49;break}v=f.data[l]+i.data[l],s.t0=v,s.next=0===s.t0?37:1===s.t0?39:255===s.t0?41:256===s.t0?43:45;break;case 37:return I+=1,s.abrupt("break",46);case 39:return h+=1,s.abrupt("break",46);case 41:return p+=1,s.abrupt("break",46);case 43:return j+=1,s.abrupt("break",46);case 45:console.log("invalid value:"+v);case 46:l+=4,s.next=32;break;case 49:return M=Math.ceil(j/(j+p+h)*1e4)/100,k="TP:".concat(j,", FP:").concat(p,", FN:").concat(h,", TN:").concat(I,", IOU=").concat(M),(S=e.state.autoTestIOU).push(M),y=Math.ceil(S.reduce((function(e,s){return e+s}))/S.length*100)/100,R="mIOU:".concat(y,", NUM:").concat(S.length),console.log(k),e.showStatus(e.STATUS_IOU,k),e.showStatus(e.STATUS_IOU_SUM,R),s.abrupt("return",M);case 59:case"end":return s.stop()}}),s)})));return function(e,a){return s.apply(this,arguments)}}(),e.evaluate_orgsize=function(){var s=Object(f.a)(d.a.mark((function s(a){var t;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:(t=document.createElement("img")).src=w[e.state.testIndex],t.onload=function(e){var s=document.createElement("canvas");s.width=t.width,s.height=t.height;var c=s.getContext("2d");c.drawImage(a,0,0,t.width,t.height);var r=c.getImageData(0,0,t.width,t.height),o=document.createElement("canvas");o.width=t.width,o.height=t.height;var n=o.getContext("2d");n.drawImage(t,0,0,t.width,t.height);var d=n.getImageData(0,0,t.width,t.height);t.remove(),s.remove(),o.remove(),console.log(d,r);for(var f=[],b=0;b<r.data.length;b+=4)0!==r.data[b]&&f.push(r.data[b]);console.log("mask"),console.log(f.length),console.log(f);for(var g=[],i=0;i<d.data.length;i+=4)0!==d.data[i]&&g.push([d.data[i],i]);console.log("label"),console.log(g.length),console.log(g)};case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e}return Object(g.a)(a,[{key:"initWorker",value:function(){var e=Object(f.a)(d.a.mark((function e(s){var a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.scalableSS.addInitializedListener((function(){a.props;a.setState({initialized:!0}),a.requestScanBarcode()})),this.scalableSS.addMaskPredictedListeners((function(e){a.statusCanvasRef.current.width!==a.parentWidth&&(a.statusCanvasRef.current.width=a.parentWidth,a.statusCanvasRef.current.height=a.parentHeight),a.showCondition(),!1===a.state.testMode?(a.showFPS(),a.requestScanBarcode()):!1===a.state.autoTest?a.evaluate_masksize(e,a.state.testIndex):a.evaluate_masksize(e,a.state.autoTestIndex).then((function(e){!0===a.state.autoTest&&a.autoTest(!1)}))})),this.scalableSS.init(s,p.SPLIT_WIDTH,p.SPLIT_HEIGHT,p.SPLIT_MARGIN),this.modelPath=s,e.abrupt("return");case 5:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"changeModel",value:function(){var e=Object(f.a)(d.a.mark((function e(s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.scalableSS=new M.ScalableSemanticSegmentation,this.initWorker(s);case 2:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"checkParentSizeChanged",value:function(e){this.videoHeight=e.videoHeight,this.videoWidth=e.videoWidth;var s=(e.getBoundingClientRect().bottom,e.getBoundingClientRect().top),a=e.getBoundingClientRect().right-e.getBoundingClientRect().left;s=a/this.videoWidth*this.videoHeight,this.parentHeight=s,this.parentWidth=a;var t=function(e,s,a,t){var c=0,r=0,o=0,n=0;return e/s>a/t?(n=0,o=(e-(r=(c=s)*(a/t)))/2):(o=0,n=(s-(c=(r=e)*(t/a)))/2),{overlayWidth:r=Math.floor(r),overlayHeight:c=Math.floor(c),overlayXOffset:o=Math.floor(o),overlayYOffset:n=Math.floor(n)}}(this.parentWidth,this.parentHeight,this.videoWidth,this.videoHeight),c=t.overlayWidth,r=t.overlayHeight,o=t.overlayXOffset,n=t.overlayYOffset;this.overlayWidth=c,this.overlayHeight=r,this.overlayXOffset=o,this.overlayYOffset=n,this.workerSSMaskMonitorCanvasRef.current.width=this.overlayWidth,this.workerSSMaskMonitorCanvasRef.current.height=this.overlayHeight,this.controllerCanvasRef.current.width=this.overlayWidth,this.controllerCanvasRef.current.height=this.overlayHeight}},{key:"componentDidMount",value:function(){var e=this;console.log("Initializing");var s=this.initWorker(p.SS_MODEL_PATH);if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var a=navigator.mediaDevices.getUserMedia({audio:!1,video:I[this.state.videoResolution]}).then((function(s){return console.log(e.videoRef),e.videoRef.current.srcObject=s,new Promise((function(s,a){e.videoRef.current.onloadedmetadata=function(){s()}}))}));Promise.all([s,a]).then((function(e){console.log("Camera and model ready!")})).catch((function(e){console.error(e)}))}}},{key:"render",value:function(){var e=this,s=this.videoRef.current;!0===this.state.initialized&&(console.log("initialized"),this.checkParentSizeChanged(s));var a=Object.keys(I).map((function(e){return{key:e,text:e,value:e}})),t=[1,2,3].map((function(e){return{key:e,text:e,value:e}})),r=[1,2,3].map((function(e){return{key:e,text:e,value:e}})),o=p.SS_MODEL_PATHS.map((function(e){return{key:e,text:e,value:e}}));return c.a.createElement("div",{style:{width:"100%",height:this.parentHeight,position:"relative",top:0,left:0},ref:this.parentRef},c.a.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}}),c.a.createElement("canvas",{ref:this.imgCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight,display:"none"}}),c.a.createElement("canvas",{ref:this.labelImgCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight,display:"none"}}),c.a.createElement("canvas",{ref:this.workerSSMaskMonitorCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),c.a.createElement("canvas",{ref:this.controllerCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),c.a.createElement("canvas",{ref:this.statusCanvasRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}}),c.a.createElement("div",{ref:this.controllerDivRef,style:{position:"absolute",top:this.overlayYOffset,left:this.overlayXOffset,width:this.parentWidth,height:this.parentHeight}},c.a.createElement(m.a,{text:"Resolution",options:a,simple:!0,item:!0,onChange:function(s,a){var t=a.value;e.changeCameraResolution(t)}}),c.a.createElement(m.a,{text:"col",options:t,simple:!0,item:!0,onChange:function(s,a){var t=a.value;e.setState({colnum:t})}}),c.a.createElement(m.a,{text:"row",options:r,simple:!0,item:!0,onChange:function(s,a){var t=a.value;e.setState({rownum:t})}}),c.a.createElement(m.a,{text:"row",options:o,simple:!0,item:!0,onChange:function(s,a){var t=a.value;e.modelPath=t,e.changeModel(t)}}),c.a.createElement(j.a,{basic:!0,size:"tiny",color:this.state.showSS?"red":"grey",onClick:function(){var s=!e.state.showSS;e.scalableSS.previewCanvas=s?e.workerSSMaskMonitorCanvasRef.current:null,e.setState({showSS:s})}},"ss"),c.a.createElement(j.a,{basic:!0,size:"tiny",color:this.state.showGrid?"red":"grey",onClick:function(){var s=!e.state.showGrid;e.scalableSS.girdDrawCanvas=s?e.controllerCanvasRef.current:null,e.setState({showGrid:s})}},"grid"),c.a.createElement(j.a,{basic:!0,size:"tiny",color:this.state.testMode?"red":"grey",onClick:function(){var s=!e.state.testMode;e.setState({testMode:s}),!1===s?(e.requestScanBarcode(),e.imgCanvasRef.current.style.display="none",e.labelImgCanvasRef.current.style.display="none"):(e.imgCanvasRef.current.style.display="block",e.labelImgCanvasRef.current.style.display="block",e.requestScanBarcodeWithImage(e.state.testIndex))}},"test(",this.state.testIndex,")"),c.a.createElement(j.a,{basic:!0,size:"tiny",color:this.state.testMode?"red":"grey",onClick:function(){!0===e.state.testMode&&(e.setState({testIndex:e.state.testIndex-1}),e.requestScanBarcodeWithImage(e.state.testIndex-1))}},"prev"),c.a.createElement(j.a,{basic:!0,size:"tiny",color:this.state.testMode?"red":"grey",onClick:function(){!0===e.state.testMode&&(e.setState({testIndex:e.state.testIndex+1}),e.requestScanBarcodeWithImage(e.state.testIndex+1))}},"next"),c.a.createElement(j.a,{basic:!0,size:"tiny",color:this.state.testMode?"red":"grey",onClick:function(){!0===e.state.testMode&&(e.autoTest(!0),e.setState({autoTest:!0}))}},"autotest")))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.827f76d6.chunk.js.map