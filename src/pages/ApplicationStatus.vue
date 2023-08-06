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
        min-width="100%"
        v-for="item in items"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <div class="text-h6">{{ item.title }}</div>
        <v-alert :value="true" :color="item.color" :icon="item.icon">
          {{ item.massage }}
        </v-alert>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "رئيس القسم العلمي",
          massage: "تتم الان معالجة طلبك من قبل رئيس قسمك العلمي",
          color: "info",
          icon: "mdi-information",
        },
        {
          id: 2,
          title: "رئيس القسم العلمي",
          massage:
            "تتم الموافقة علي  طلبك من قبل رئيس قسمك العلمي، وتمت إحالته إلى مكتب شؤون أعضاء هيئة التدريس بالكلية",
          color: "success",
          icon: "mdi-check-circle",
        },
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
};
</script>
