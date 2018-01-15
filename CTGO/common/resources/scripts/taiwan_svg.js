var place_data = [
  {
    tage: "taipei_city",
    place: "臺北市",
    features: "天龍國"
  },
  {
    tage: "new_taipei_city",
    place: "新北市",
    features: "市長是侯友宜對不對"
  },
  {
    tage: "taichung_city",
    place: "台中市",
    features: "慶紀市、海景第一排"
  },
  {
    tage: "tainan_city",
    place: "臺南市",
    features: "食物太甜啦"
  },
  {
    tage: "kaohsiung_city",
    place: "高雄市",
    features: "高雄式左轉、戰南北囉"
  },
  {
    tage: "keelung_city",
    place: "基隆市",
    features: "邊緣欸，幫QQ"
  },
  {
    tage: "taoyuan_country",
    place: "桃園市",
    features: "外勞多"
  },
  {
    tage: "hsinchu_city",
    place: "新竹市",
    features: "美食沙漠"
  },
  {
    tage: "hsinchu_country",
    place: "新竹縣",
    features: "回收業集散地QQ"
  },
  {
    tage: "miaoli_country",
    place: "苗栗縣",
    features: "天賜良機，可惡想拆"
  },
  {
    tage: "changhua_country",
    place: "彰化縣",
    features: "送肉粽囉"
  },
  {
    tage: "nantou_country",
    place: "南投縣",
    features: "真‧內地"
  },
  {
    tage: "yunlin_country",
    place: "雲林縣",
    features: "六輕汙染"
  },
  {
    tage: "chiayi_city",
    place: "嘉義市",
    features: "火雞肉飯"
  },
  {
    tage: "chiayi_country",
    place: "嘉義縣",
    features: "小商人"
  },
  {
    tage: "pingtung_country",
    place: "屏東縣",
    features: "墾丁才是本體"
  },
  {
    tage: "yilan_country",
    place: "宜蘭縣",
    features: "雪隧又塞車了"
  },
  {
    tage: "hualien_country",
    place: "花蓮縣",
    features: "花蓮國"
  },
  {
    tage: "taitung_country",
    place: "台東縣",
    features: "好山好水好無聊"
  }
];

var vm = new Vue({
  el: "#app",
  data: {
    filter: "",
    place_data: place_data
    
  },
  computed: {
      now: function() {
        var vobj = this;
        var mapplace = this.place_data.filter(function(obj) {
          return obj.tage == vobj.filter;
        });
        if(mapplace.length ==0){
          return null;
        }
        return mapplace[0];
      }
    }
});

$("path").mouseenter(function(e) {
  var tagname = $(this).attr("id");
  vm.filter= tagname;
  console.log(vm.filter)

});