<template>
  <v-btn
    prepend-icon="mdi-chevron-right"
    @click="$router.push({ name: 'ApplicationManagement' })"
    >العودة لإدارة الطلبات</v-btn
  >
  <TheH1>حالة طلبك</TheH1>
  <v-alert type="info">
    أحد أهم ميزات التي يتيحها نظام إدارة شؤون أعضاء هيئة التدريس هي امكانية
    متابعة تقدم الطلبات عبر النظام
  </v-alert>
  <v-container>
    <v-timeline side="end">
      <v-timeline-item
        v-if="this.apply.isSubmitedByFM"
        min-width="100%"
        dot-color="info"
        size="small"
      >
        <div class="text-h6">رئيس القسم العلمي</div>
        <v-alert type="info">
          تتم الان معالجة طلبك من قبل رئيس قسمك العلمي
        </v-alert>
      </v-timeline-item>
      <div
        v-if="this.apply.isSubmitedByDH && this.apply.dhNoteWhenFalse == null"
      >
        <v-timeline-item min-width="100%" dot-color="info" size="small">
          <div class="text-h6">رئيس القسم العلمي</div>
          <v-alert type="success">
            تتم الموافقة علي طلبك من قبل رئيس قسمك العلمي، وتمت إحالته إلى مكتب
            شؤون أعضاء هيئة التدريس بالكلية
          </v-alert>
        </v-timeline-item>
        <v-timeline-item min-width="100%" dot-color="info" size="small">
          <div class="text-h6">مكتب شؤون أعضاء هيئة التدريس</div>
          <v-alert type="info">
            تتم الأن معالجة طلبك من قبل مكتب شؤون أعضاء هيئة التدريس بالكلية
          </v-alert>
        </v-timeline-item>
      </div>
      <v-timeline-item
        v-if="this.apply.isSubmitedByDH && this.apply.dhNoteWhenFalse !== null"
        min-width="100%"
        dot-color="info"
        size="small"
      >
        <div class="text-h6">رئيس القسم العلمي</div>
        <v-alert type="error">
          يوجد نقص في طلبك:
          {{ apply.dhNoteWhenFalse }}
        </v-alert>
        <v-btn
          :loading="isLoading"
          :disabled="isLoading"
          @click="openApplicationPage()"
          >فتح الطلب</v-btn
        >
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      apply: null,
      items: [
        {
          id: 3,
          title: "مكتب شؤون أعضاء هيئة التدريس",
          massage:
            "تتم الأن معالجة طلبك من قبل مكتب شؤون أعضاء هيئة التدريس بالكلية",
          color: "info",
          icon: "mdi-information",
        },
        {
          id: 4,
          title: "مكتب شؤون أعضاء هيئة التدريس",
          massage:
            "تتم الموافقة علي  طلبك من قبل مكتب شؤون أعضاء هيئة التدريس وتمت إحالته إلى إدارة شؤون أعضاء هيئة التدريس بالجامعة",
          color: "success",
          icon: "mdi-check-circle",
        },
      ],
    };
  },
  methods: {
    init() {
      this.apply = JSON.parse(localStorage.getItem("apply"));
    },
    openApplicationPage() {
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({
          name: "ApplicationPersonaInfo",
          params: { id: this.$route.params.id },
        });
        this.isLoading = false;
      }, 2000);
    },
  },
  created() {
    this.init();
  },
};
</script>
