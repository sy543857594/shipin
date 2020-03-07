/*全局变量*/
var qname;  //测试题目
var queArr = new Array("陌生人太多的环境会让你感到不适？", "你乐意认识陌生人？", "你更多得考虑别人的感受？", "比起聚会你更喜欢一个人呆着？", "你相信伯拉图式的爱情吗？",
    "你绝对不吃不喜欢的食物？", "你算是个守时的人吗？", "你忘不掉初恋？", "你智商较情商更高吗？", "你能接受裸婚吗？",
    "你经常怀念年少的日子？", "比起摇滚你更喜欢古典音乐？", "你曾被人嘲笑过长相吗？", "喜欢美剧胜过韩剧或者日剧？", "你觉得自己看人准吗",
    "不是太懂现在年轻人喜欢什么？", "认同有压力才会有动力的观点？", "曾幻想过出柜/搞百合吗？", "经常会一个人发呆？", "喜欢狗胜过猫？",
    "你相信星座吗？", "对钱的欲望并不是特别大？", "你仍相信爱情吗？", "你害怕衰老？", "你心里年龄比生理年龄更大？",
    "如果赚足了一生的财富，你仍会继续工作？", "在别人的眼里你是个听话的孩子吗？", "即使很累，你也能神采奕奕得参加部门聚餐？", "能接受男/女朋友整容？", "去旅游一定要拍照？",
    "你是个假正经吗？", "喜欢简约胜过华丽？", "曾被别人说过“中庸？”", "喜欢喝白开水胜过汽水？", "谈过三个以上男/女朋友？",
    "乐观大于悲观？", "相比繁华的城市更喜欢宁静的山庄？", "相比喜欢我的更愿意选择一个我喜欢的？”", "你是一个十分自律的人？", "（曾经）疯狂的追星？",
    "对耳机的音质非常挑剔？", "喜欢夏天胜过冬天？", "你懂得如何打扮自己？”", "喜欢用微信胜过QQ？", "外向大过内向？",
    "最近半年里都没有痛哭过？", "你是个无神论者？", "喜欢喝咖啡胜过牛奶？”", "从不吃香菜？", "认为喝咖啡比吃打算高雅？",
    "经常因为学习/工作熬夜？", "你曾做过一辈子都不结婚的打算？", "有蓝颜知己？", "早上能坚持吃早餐？", "你有锻炼的习惯？");
var aArr = new Array("你是一个忠于自己内心的人，在爱情里，你会尽量保持自己的风格，即使你知道这有些困难。因此，你偶尔也会和伴侣发生一些小的争执，建议平时多体谅一下对方哦。",
    "你是一个懂得自我排解的人，虽然最近的你感情生活比较平淡，但是这也正是增进彼此之间情感的好机会，抽个时间与伴侣共进一个晚餐吧。",
    "你是一个能承受安静的人，这也使得你最近的感情生活出现了一些小问题，但是测试显示你的缘分就在身边哦，不妨出去走走碰碰运气吧！",
    "你是一个稍稍有些感情洁癖的人，虽然内心渴望被人爱，但这让你在异性面前显得有些高冷/高眼光，但是如果想拉近感情距离的话，还是多想想对方，自己多付出一些关心哦。",
    "你是一个比较感性的人，感情上总是会发生一些让你情绪波动的小事情，具体是向上波动还是向下波动，要看你自己的情绪掌控能力，情绪不好的时候建议适度减少两人亲密接触的时间哦",
    "你的内心远比外表表现的更浪漫，更渴望被爱，正好近期你和恋人之间也有机会会发生深刻的变化，如果希望带来正向的转变，发挥你浪漫的内心吧。",
    "你的内心远比你的外表要幼稚，你渴望与恋人一起探索未知的世界，你渴望你们彼此之间的甜蜜，这反而可能造成你最近的爱情状况停步不前，你可以试试用清淡一些的方式来改变这种情况。",
    "你对待感情总会从理性丶现实的角度出发,你的性格也比较强烈 给人的印象特立独行。这也让许多异性会觉得盖不住你而退却。不过凡事也有例外，等待喜欢你这种菜的伴侣出现吧",
    "你在恋爱时常常不是喜欢上那个人，而是爱上了恋爱的感觉。你在选择爱情时，往往更侧重于自己的感情倾向，而非作注重如何让自己的感情走的更久远。而仅靠感情维系，缺乏责任感以及更多羁绊的爱情，多数是难以稳定的。",
    "感情中你曾经真心付出，但最后才发现自己有多傻。现在的你不再对爱情过多奢求，有类似的温度、陪伴就足够了。其实你这个人很重感情，只是在感情上受挫后就会质疑自己的爱情观。此后你在感情中不会再挑剔太多，这是因为你早已找不到自己最初的那份真心。",
    "你的性格里有不成熟的地方，这样性格常常使你在爱中受伤，虽然你知道恋爱是两个人的事，但是你有时会不由自主地以自我为中心，只想单纯享受爱情本身的甘美，往往却遇到难以解决的现实问题",
    "在你的内心里，你对伴侣的爱情深度非常明显，但是埋在内心的情愫是不容易被对方察觉的，试着表现出来吧，不管是身体上还是口头上，这会给你带来正面影响哦！");

var bArr = new Array("你的心肠很软，即使别人做出伤害你的行为或语言，只要对方主动道歉，你就不会计较，而且你也是个不会记仇的人，你的内心相比你的外表更成熟，面对感情有点缺乏安全感觉，有点感性，许多话憋在心里不敢说，因为你珍惜彼此的情谊，所以宁愿自己委屈一点。",
    "你率真坦白，讨厌欺骗。对于朋友们的求助，你几乎有求必应。也因此受过偏。面对爱情，你容易被感动且心思细腻，会傻傻的爱着对方，其实你的内心远比外表要脆弱，需要一个避风港为你遮风挡雨，给你安全感。",
    "你的性格稍微有点举棋不定，甚至容易因此错失良机，你喜欢自由的感觉，讨厌束缚和压迫，假日最喜欢呆在家里睡觉或者发呆，面对爱情，你却一反平时，表现的很温柔。但是注意，这容易把伴侣给惯坏了。建议你要多爱自己一点哦。",
    "不管你承认与否，你是个完美主义者，你常常会鞭策自己，希望通过自己的努力得到最好的，你常追求过高和完美的目标，也很在意别人的评价与关注，虽然别人认为你已经足够好了，但是你往往还希望自己做的更好。",
    "无论你外表表现的如何，你内心是一个极不服输的人，挫折越大越能激起你获胜的欲望与性格的韧性，当你越不被看好的时候，反而是你越能突破困境，达到目标的时候。",
    "相比你平静的外表，你内心更渴望安全感，你害怕受伤害，做事情也更多的选择保守方式，当你的物质生活变得不宽裕时，你就很容易没自信，也因此开始胡思乱想。建议加强自信心。",
    "你是个非常注重个人隐私的人，和人相处的时候习惯保持一定的空间和距离，与此同时你也不愿主动去打探别人的隐私，就算是和最亲密的人，你也能做到完完全全的尊重和保护。",
    "你很会处理人际关系；富有想象力；内心世界比较童真；非常重感情。喜欢迎接挑战；意志坚定,天生乐观的你并不会因为挫折而闷闷不乐，而总是能想到解决问题的办法",
    "你是一个追求和平的人。偶尔也会害怕独处，因此你擅长与周围的人保持良好的和谐关系，总是给人亲切温和的印象。周围的人也对你比较信赖。不过，因为对每个人的态度都差不多，所以有时候也容易让人误认为你是个八面玲珑的人",
    "你常常想让自己呈现出成熟，可靠的感觉。反而在旁人的眼里你可能是个老成的人。但是无论如何，你内心散发着一股让人感到很舒服的魅力。因为你总是能够为他人着想，但真正的心事却不轻易向他人吐露，而是自己摸摸承受",
    "其实你内心的个性还是比较拘谨的，且自我价值观很强烈。很怕因外来因素的来必须改变自己。但外表及处理事情的态度上，却给人有一种很大的信赖感。你耿直的个性，也让人很信服你，不知不觉中支持你的伙伴会越来越多",
    "你追求精致的生活，有着独特的审美观，喜欢有品味的事物，对于财富你也不掩饰自己对它的执着，希望自己和家人过上更好的日子，同时你喜欢享受生活，享受当下的美好。");
var cArr = new Array("近期的运势，工作上，人际关系和社交始终有助成功，与脑力层面的关联性大增；感情上，不能太相信你自己，多听他人意见；健康上，容易中暑，多小心；财运上，今天你的物质欲望似乎大受刺激。",
    "近期的运势，工作上，有进有退，切记厘清轻重缓急，急其所当急；感情上，因为想要稳定就反而对他人要求变多，而让很多一步之遥就能稳定的关系不欢而散；健康上，比较喜欢吃辣的；财运上，可以投资。",
    "近期的运势，工作上，沟通运也很良好，快乐的话题在身边围绕，心中的烦恼也在谈笑中豁然开朗；感情上，一些本身濒临崩溃的关系也会因为现实的最后一击而自东流去；健康上，不太适合出门；财运上，投资运差。",
    "近期的运势，工作上，兴趣实在太广，战线拉得太长，你们的精力开始没法跟上节奏；感情上，比较渴望家庭，也很希望能够步入婚姻；健康上，在运动时要多加小心；财运上，可以小规模投资一番。",
    "近期的运势，工作上，客观情况愈发清晰，路障正在消除；感情上，你想要的实在太多了，所以不能怪对方给得太少；健康上，远足或其他类型的激烈身体活动需要小心；财运上，交际费就不要太小气了。",
    "近期的运势，工作上，各路好手相聚的大家庭带来友谊支持与资源共享，集体行动则让团队战力更为强大；感情上，爱情是共同进步，而不是要求太多；健康上，记得多吃点饭；财运上，物质上可不能太贪心。",
    "近期的运势，工作上，有着以气势胁迫对方的倾向，这样的态度会令对方畏缩而不愿亲近你；感情上，你们之间感情上的阻碍比较大，未来路还很长；健康上，比较爱吃饭；财运上，小心别被短期利益迷惑。",
    "近期的运势，工作上，事业有另辟蹊径或突破求新迹象，尝试新组合、新构想颇有成绩；感情上，不要听别人的意见，容易自寻烦恼，自己相爱就去爱吧；健康上，可以改善一下伙食；财运上，个人支出较少。",
    "近期的运势，工作上，在设定重点和个人价值上，一些事情可能突然变化；感情上，不明白对方的心，还是早点问清楚吧，不要自己乱猜想了；健康上，多多关心家人的身体；财运上，可以看到财富向你走来。",
    "近期的运势，工作上，无论是在众多选项中做出艰难决定或断然抽刀斩麻、大力整顿，速度魄力是成败关键；感情上，你们之间的爱才刚刚开始，一切都还不太确定；健康上，记得多吃饭；财运上，可以投资。",
    "近期的运势，工作上，外在情势频频出现变数的这段日子，得在浑沌中力求理智清晰；感情上，如果一个人生活太寂寞，那就赶快找一个伴侣吧；健康上，晚上睡觉要注意保暖才行；财运上，投资机会少。",
    "近期的运势，工作上，你感觉正获得更多力量，更自信，你的情绪变得更好，更光明，各种事情也渐渐顺利；感情上，明明很爱，却不想承认；健康上，胃口不是很好；财运上，如果管理财务会成为今天的重点。");

var dArr =new Array("将母性的本质发挥到了极限。最重要的东西是家庭。他们往往就像蟹一样，在充满坚硬的外壳下面是柔软的内心;他们对朋友、对家人非常忠实，做事也会一直坚持到底","极有可能是巨蟹，简直就是话痨，一个人都可以叨叨叨说不停","内心很冷酷的人，但实际上他们就是个爱哭鼻子的傻瓜。总是会因为很多事情感动，有着轻微自虐倾向的人，怎么让自己不舒服怎么来。巨蟹难过的时候，就越是要看悲伤的故事让自己流泪；受伤的时候就越喜欢虐自己，把自己想的一文不值。真的很需要朋友的陪伴");

var tempArr = new Array();
function resetinfo() {
    document.getElementById('qname').value = "";
}
function inputinfo() {
	
    var name = document.getElementById('qname').value.replace(/(^\s*)|(\s*$)/g, "");
    var leibie = document.getElementById('leibie').value;
    if (name.length == 0) {
        alert('请输入测试名称！')
    } else {
   debugger;
        qname = name;
        var firstName = qname.substr(0, 1);
        if (!checkbjx(firstName)) {
            alert("不好意思，请输入正确的人名字");
            return false;
        } else {
            alert("验证成功");
        }
        document.getElementById('myMusic').play();
        document.getElementById('body').className = "hide";
        document.getElementById('createtest').className = "createtest";
        document.getElementById('name').innerText = qname;
        /*问题数组操作 */
        var history = new Array();
        for (var i = 0; i < 20; i++) {
            var m = parseInt(Math.random() * 55);
            while (history.indexOf(m) != -1) {
                m = parseInt(Math.random() * 55);
            }
            history.push(m);
            tempArr.push(queArr[m]);
        }
        for (var i = 1; i <= 17; i++) {
            document.getElementById(i).innerHTML = i + "." + tempArr[i - 1] + "<div class='guide'>YES:" + (i + 2) + "&nbsp;&nbsp;NO:" + (i + 3)+"</div>";
        }
        document.getElementById(i).innerHTML = i + "." + tempArr[i - 1] + "<div class='guide'>YES:" + (i + 2) + "&nbsp;&nbsp;NO:A</div>";
        i++;
        document.getElementById(i).innerHTML = i + "." + tempArr[i - 1] + "<div class='guide'>YES:A&nbsp;&nbsp;NO:B</div>";
        i++;
        document.getElementById(i).innerHTML = i + "." + tempArr[i - 1] + "<div class='guide'>YES:C&nbsp;&nbsp;NO:D</div>";
        /*结果数组操作*/
        history = [];
        tempArr = [];
        if (leibie == '1') {
            for (var i = 0; i < 4; i++) {
                var m = parseInt(Math.random() * 12);
                while (history.indexOf(m) != -1) {
                    m = parseInt(Math.random() * 12);
                }
                history.push(m);
                tempArr.push(aArr[m]);
            }
        }
        else if (leibie == '2') {
            for (var i = 0; i < 4; i++) {
                var m = parseInt(Math.random() * 12);
                while (history.indexOf(m) != -1) {
                    m = parseInt(Math.random() * 12);
                }
                history.push(m);
                tempArr.push(bArr[m]);
            }
        }
        else {
            for (var i = 0; i < 4; i++) {
                var m = parseInt(Math.random() * 12);
                while (history.indexOf(m) != -1) {
                    m = parseInt(Math.random() * 12);
                }
                history.push(m);
                tempArr.push(cArr[m]);
            }
        }
        /*将结果输出到页面 */
        var j=0;
        var result=  document.getElementById('result').value;
        if(result=='A'){
        	  document.getElementById('A').innerHTML="A."+tempArr[j++];
        }
        else if(result=='B'){
        	 document.getElementById('B').innerHTML="B."+tempArr[j++];
        }
        else if(result=='C'){
        	document.getElementById('C').innerHTML="C."+tempArr[j++];
        }
       else if(result=='D'){
    	   document.getElementById('D').innerHTML="D."+tempArr[j];
       }
      
//        document.getElementById('B').innerHTML="B."+tempArr[j++];
//        document.getElementById('C').innerHTML="C."+tempArr[j++];
//        document.getElementById('D').innerHTML="D."+tempArr[j];
    }
}
function reload() {
    window.location.reload(false);
}

function result(){
	
	var result =document.getElementById("result33").value;
	document.getElementById('A').innerHTML="";
	document.getElementById('B').innerHTML="";
	document.getElementById('C').innerHTML="";
	document.getElementById('D').innerHTML="";
	debugger;
	 var history = new Array();
     for (var i = 0; i < 20; i++) {
         var m = parseInt(Math.random() * 55);
         while (history.indexOf(m) != -1) {
             m = parseInt(Math.random() * 55);
         }
         history.push(m);
         tempArr.push(queArr[m]);
     }
     var j=0;
     if(qname.indexOf("左")!=-1||qname.indexOf("saraz")!=-1){
     	
    	   document.getElementById('A').innerHTML="A."+dArr[0];
    	
    }
     
     else{
	if(result=='A'){
  	  document.getElementById('A').innerHTML="A."+tempArr[j++];
  }
  else if(result=='B'){
  	 document.getElementById('B').innerHTML="B."+tempArr[j++];
  }
  else if(result=='C'){
  	document.getElementById('C').innerHTML="C."+tempArr[j++];
  }
 else if(result=='D'){
	   document.getElementById('D').innerHTML="D."+tempArr[j];
 }
	
 else{
	 
	 alert("只有 A,B,C,D 选项");
 }
     }
        
}


//验证百家姓
function checkbjx(name) {
    //js正则表达式  match
    //为什么此时的match方法不对
    if ("赵|钱|孙|李|周|吴|郑|王|冯|陈|楮|卫|蒋|沈|韩|杨|朱|秦|尤|许|何|吕|施|张|孔|曹|严|华|金|魏|陶|姜|戚|谢|邹|喻|柏|水|窦|章|云|苏|潘|葛|奚|范|彭|郎|鲁|韦|昌|马|苗|凤|花|方|俞|任|袁|柳|酆|鲍|史|唐|费|廉|岑|薛|雷|贺|倪|汤|滕|殷|罗|毕|郝|邬|安|常|乐|于|时|傅|皮|卞|齐|康|伍|余|元|卜|顾|孟|平|黄|和|穆|萧|尹|姚|邵|湛|汪|祁|毛|禹|狄|米|贝|明|臧|计|伏|成|戴|谈|宋|茅|庞|熊|纪|舒|屈|项|祝|董|梁|杜|阮|蓝|闽|席|季|麻|强|贾|路|娄|危|江|童|颜|郭|梅|盛|林|刁|锺|徐|丘|骆|高|夏|蔡|田|樊|胡|凌|霍|虞|万|支|柯|昝|管|卢|莫|经|房|裘|缪|干|解|应|宗|丁|宣|贲|邓|郁|单|杭|洪|包|诸|左|石|崔|吉|钮|龚|程|嵇|邢|滑|裴|陆|荣|翁|荀|羊|於|惠|甄|麹|家|封|芮|羿|储|靳|汲|邴|糜|松|井|段|富|巫|乌|焦|巴|弓|牧|隗|山|谷|车|侯|宓|蓬|全|郗|班|仰|秋|仲|伊|宫|宁|仇|栾|暴|甘|斜|厉|戎|祖|武|符|刘|景|詹|束|龙|叶|幸|司|韶|郜|黎|蓟|薄|印|宿|白|怀|蒲|邰|从|鄂|索|咸|籍|赖|卓|蔺|屠|蒙|池|乔|阴|郁|胥|能|苍|双|闻|莘|党|翟|谭|贡|劳|逄|姬|申|扶|堵|冉|宰|郦|雍|郤|璩|桑|桂|濮|牛|寿|通|边|扈|燕|冀|郏|浦|尚|农|温|别|庄|晏|柴|瞿|阎|充|慕|连|茹|习|宦|艾|鱼|容|向|古|易|慎|戈|廖|庾|终|暨|居|衡|步|都|耿|满|弘|匡|国|文|寇|广|禄|阙|东|欧|殳|沃|利|蔚|越|夔|隆|师|巩|厍|聂|晁|勾|敖|融|冷|訾|辛|阚|那|简|饶|空|曾|毋|沙|乜|养|鞠|须|丰|巢|关|蒯|相|查|后|荆|红|游|竺|权|逑|盖|益|桓|公|万俟|司马|上官|欧阳|夏侯|诸葛|闻人|东方|赫连|皇甫|尉迟|公羊|澹台|公冶|宗政|濮阳|淳于|单于|太叔|申屠|公孙|仲孙|轩辕|令狐|锺离|宇文|长孙|慕容|鲜于|闾丘|司徒|司空|丌官|司寇|仉|督|子车|颛孙|端木|巫马|公西|漆雕|乐正|壤驷|公良|拓拔|夹谷|宰父|谷梁|晋|楚|阎|法|汝|鄢|涂|钦|段干|百里|东郭|南门|呼延|归|海|羊舌|微生|岳|帅|缑|亢|况|后|有|琴|梁丘|左丘|东门|西门|商|牟|佘|佴|伯|赏|南宫|墨|哈|谯|笪|年|爱|阳|佟|第五|言|福".search(name) != -1
    ) {
        return true;
    }
    else {
        return false;
    }
}