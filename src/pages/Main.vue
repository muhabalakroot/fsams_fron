<template>
  <v-alert type="success">
    أهلا بك {{ user.firstName }} {{ user.lastName }} في نظام إدارة شؤون أعضاء
    هيئة التدريس
  </v-alert>
  <div class="text-center pa-2">
    <v-img class="mx-auto" width="70" src="/uot_logo.png"></v-img>
    <div class="text-h5">جامعة طرابلس</div>
    <div class="text-h5">إدارة شؤون أعضاء هيئة التدريس</div>
  </div>
  <div class="pa-2">
    <div class="pb-2">
      نظام إدارة شؤون أعضاء هيئة التدريس عبارة عن منصة إلكترونية شاملة وسهلة
      الاستخدام مصممة لتبسيط عملية طلبات أعضاء هيئة التدريس للطلبات المختلفة ،
      بما في ذلك الترقيات والمسائل الأخرى ذات الصلة. يهدف هذا النظام إلى تبسيط
      الإجراءات على أعضاء هيئة التدريس من خلال تقديم طلبات سلسة وفعالة.
    </div>

    <div v-if="userRole == 'department-head'">
      <v-divider></v-divider>

      <div class="pb-2">
        كرئيس قسم علمي أنت مسؤول عن معالجة الطلبات التي ترد من أعضاء هيئة
        التدريس التابعين لقسمك العلمي، كما يمكنك إضافة وتعديل بيانات وحذف حسابات
        أعضاء هيئة التدريس بقسمك.
      </div>

      <div class="pb-2">يمكنك أيضا تقديم الطلبات عن طريق هذا الحساب.</div>
    </div>

    <v-divider></v-divider>

    <div class="font-weight-bold pt-2">معلومات تهمك عند تصفح الطلب:</div>
    <ul>
      <li class="mr-5 py-1">
        يجب إكمال الطلبات عبر الإنترنت. يتم تمييز الأسئلة المطلوبة بعلامة النجمة
        <span style="color: red"> الحمراء (*).</span> يمكنك الوصول إلى الطلب
        الخاص بك وتغيير إجاباتك باستخدام البريد الجامعي وكلمة المرور في أي وقت.
      </li>
      <li class="mr-5 py-1">
        بينما يتم قبول عدد من إمتدادات الملفات، للحفاظ على التنسيق ولضمان تقديم
        الأحرف الخاصة بشكل صحيح، يوصى بشدة بتقديم المرفقات بتنسيق PDF.
      </li>
      <li class="mr-5 py-1">
        لا تحتاج إلى إكمال هذا الطلب في جلسة واحدة. لحفظ إجاباتك انقر على "حفظ"
        الموجود أسفل كل صفحة. ستتمكن من الوصول إلى أي عمل محفوظ خلال جلستك
        التالية.
      </li>
      <li class="mr-5 py-1">ستنتهي جلستك بعد 20 دقيقة من عدم النشاط.</li>
      <li class="mr-5 py-1">
        عند الإنتهاء، يرجى تقديم طلبك بالنقر فوق الزر "إرسال" الموجود في صفحة
        "مراجعة الطلب". بعد التقديم، لن تتمكن من إجراء تغييرات على طلبك الا باذن
        رئيس قسمك العلمي.
      </li>
    </ul>
  </div>
</template>
<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
    ...mapState(useUsersStore, ["users"]),
  },
  methods: {
    initialize() {
      this.user = this.users[0];
    },
  },
  created() {
    this.initialize();
  },
};
</script>
