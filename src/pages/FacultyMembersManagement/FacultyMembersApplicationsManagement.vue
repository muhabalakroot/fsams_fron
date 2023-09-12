<template>
  <v-btn
    prepend-icon="mdi-chevron-right"
    @click="$router.push({ name: 'FacultyMembersManagment' })"
    >عودة</v-btn
  >
  <v-data-table
    :headers="userRole == 'department-head' ? DHheaders : headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>
          {{ item.columns.applicationType }}
        </td>
        <td>{{ item.columns.firstName }} {{ item.raw.lastName }}</td>
        <td v-if="userRole !== 'department-head'">
          {{ item.columns.department }}
        </td>
        <td>{{ item.columns.currentDegree }}</td>
        <td>{{ item.columns.createdAt }}</td>

        <td>
          <v-btn class="ma-1" variant="outlined"
            ><v-icon icon="mdi-printer" @click="printList()"></v-icon
          ></v-btn>
          <!-- department-head form -->
          <!-- <PrintLayout
            dir="rtl"
            hidden
            id="formToPrint"
            :firstName="item.raw.firstName"
            :fatherName="item.raw.fatherName"
            :lastName="item.raw.lastName"
            class="ma-auto"
          >
            <v-container>
              <div style="text-align: center">
                <img src="@/assets/uot_logo.png" style="width: 150px" />
                <h1>جامعة طرابلس</h1>
                <h1>إدارة شؤون أعضاء هيئة التدريس</h1>
                <h1>إجراءات القسم بشأن ترقية عضو هيئة التدريس</h1>
              </div>

              <v-row style="margin-top: 10px">
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">الكلية</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    density="compact"
                    variant="outlined"
                    >{{ item.raw.faculty }}
                  </v-alert>
                </v-col>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">القسم التابع له</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    density="compact"
                    variant="outlined"
                    >{{ item.raw.department }}</v-alert
                  >
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">تاريخ استلام الطلب</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    variant="outlined"
                    density="compact"
                  >
                    {{ item.raw.dateOfObtaining }}
                  </v-alert>
                </v-col>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">
                    تاريخ عرض موضوع الطلب على مجلس القسم
                  </p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    variant="outlined"
                    density="compact"
                  >
                    {{ item.raw.dateOfObtaining }}
                  </v-alert>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">
                    ملخص قرار مجلس القسم
                  </p>
                  <v-alert
                    class="mt-0 mb-5"
                    style="font-size: 24px"
                    density="compact"
                    variant="outlined"
                  >
                    ملخص قرار مجلس القسم ملخص قرار مجلس القسم ملخص قرار مجلس
                    القسم ملخص قرار مجلس القسم ملخص قرار مجلس القسم ملخص قرار
                    مجلس القسم ملخص قرار مجلس القسم ملخص قرار مجلس القسم ملخص
                    قرار مجلس القسم ملخص قرار مجلس القسم ملخص قرار مجلس القسم
                    ملخص قرار مجلس القسم ملخص قرار مجلس القسم
                  </v-alert>
                </v-col>
              </v-row>

              <p class="mb-2" style="font-size: 24px; text-align: right">
                وبمراجعة البيانات المدرجة بطلب القسم تبين لمجلس القسم
                <span style="font-weight: bolder">مطابقتها</span> وعليه تمت
                التوصية بالآتي:
              </p>
              <p class="mb-4" style="font-size: 24px; text-align: right">
                - <span style="font-weight: bolder">الموافقة</span> على استكمال
                إجراءات الترقية للدرجة العلمية التالية.
              </p>

              <p class="mb-2" style="font-size: 24px; text-align: right">
                يقترح مجلس القسم لجنة التقييم من الإخوة:
              </p>

              <v-table style="border: 2px solid black">
                <thead>
                  <tr style="font-size: 24px; text-align: right">
                    <th style="font-size: 24px; border: 2px solid black">
                      اسم المحكم
                    </th>
                    <th style="font-size: 24px; border: 2px solid black">
                      الجامعة التابع لها
                    </th>
                    <th style="font-size: 24px; border: 2px solid black">
                      الدرجة العلمية
                    </th>
                    <th style="font-size: 24px; border: 2px solid black">
                      التخصص
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style="font-size: 24px; text-align: right"
                    v-for="item in item.raw.scientificPaper"
                    :key="item.id"
                  >
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.scientificPaperTitle }}
                    </td>
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.scientificPaperTitle }}
                    </td>
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.publisher }}
                    </td>
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.publisher }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-container>

            <v-row class="mt-6">
              <v-col
                cols="5"
                style="font-size: 24px; font-weight: bolder; text-align: right"
                >اسم رئيس القسم: {{ item.raw.firstName }}
                {{ item.raw.fatherName }} {{ item.raw.lastName }}</v-col
              >
            </v-row>
            <v-row class="mb-0 pb-0">
              <v-col
                class="mb-0 pb-0"
                style="font-size: 24px; font-weight: bolder; text-align: right"
                cols="5"
                >التاريخ: {{ item.raw.createdAt }}</v-col
              >
            </v-row>
          </PrintLayout> -->
          <!-- Form to print -->
          <PrintLayout
            dir="rtl"
            hidden
            id="formToPrint"
            :firstName="item.raw.firstName"
            :fatherName="item.raw.fatherName"
            :lastName="item.raw.lastName"
            class="ma-auto"
          >
            <v-container>
              <div style="text-align: center">
                <img src="@/assets/uot_logo.png" style="width: 150px" />
                <h1>جامعة طرابلس</h1>
                <h1>إدارة شؤون أعضاء هيئة التدريس</h1>
                <h1>طلب ترقية عضو هيئة تدريس</h1>
              </div>

              <v-row>
                <v-col style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">الاسم بالكامل</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    density="compact"
                    variant="outlined"
                    >{{ item.raw.firstName }} {{ item.raw.fatherName }}
                    {{ item.raw.lastName }}</v-alert
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">الكلية</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    density="compact"
                    variant="outlined"
                    >{{ item.raw.faculty }}
                  </v-alert>
                </v-col>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">القسم التابع له</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    density="compact"
                    variant="outlined"
                    >{{ item.raw.department }}</v-alert
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">المؤهل</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    variant="outlined"
                    density="compact"
                    >{{ item.raw.qualification }}</v-alert
                  >
                </v-col>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">
                    تاريخ ومكان الحصول عليها
                  </p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    variant="outlined"
                    density="compact"
                    >{{ item.raw.univercity }} - {{ item.raw.dateOfObtaining }}
                  </v-alert>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">
                    الدرجة العلمية الحالية
                  </p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    variant="outlined"
                    density="compact"
                    >{{ item.raw.currentDegree }}
                  </v-alert>
                </v-col>
                <v-col cols="6" style="text-align: right">
                  <p class="mb-0" style="font-size: 24px">رقم القرار وتاريخه</p>
                  <v-alert
                    class="mt-0"
                    style="font-size: 24px"
                    variant="outlined"
                    density="compact"
                    >{{ item.raw.promotoinDegreeNumber }} -
                    {{ item.raw.degreeDateOfObtaing }}
                  </v-alert>
                </v-col>
              </v-row>

              <v-divider class="ma-4"></v-divider>

              <p class="mb-2" style="font-size: 24px; text-align: right">
                بيان بالبحوث العلمية أو الكتب المؤلفة أو العمل الإبداعي المبتكر
                المقدم للترقية.
              </p>

              <v-table style="border: 2px solid black">
                <thead>
                  <tr style="font-size: 24px; text-align: right">
                    <th style="font-size: 24px; border: 2px solid black">
                      ر.م
                    </th>
                    <th style="font-size: 24px; border: 2px solid black">
                      عنوان البحث أو الكتاب أو العمل الإبداعي
                    </th>
                    <th style="font-size: 24px; border: 2px solid black">
                      جهة النشر
                    </th>
                    <th style="font-size: 24px; border: 2px solid black">
                      تاريج النشر
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style="font-size: 24px; text-align: right"
                    v-for="(item, i) in item.raw.scientificPaper"
                    :key="item.id"
                  >
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ i + 1 }}
                    </td>
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.scientificPaperTitle }}
                    </td>
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.publisher }}
                    </td>
                    <td style="font-size: 24px; border: 2px solid black">
                      {{ item.dateOfpublishing }}
                    </td>
                  </tr>
                </tbody>
              </v-table>

              <p class="mb-2" style="font-size: 24px; text-align: right">
                يقر عضو هيئة التدريس بصحة البيانات المدونة أعلاه والتي يأكد من
                خلالها استيفاءه للشروط الطلوبة للتقديم على الترقية ويتحمل مسؤولة
                ذلك.
              </p></v-container
            >

            <v-row>
              <v-col
                cols="4"
                style="font-size: 24px; font-weight: bolder; text-align: right"
                >الاسم: {{ item.raw.firstName }} {{ item.raw.fatherName }}
                {{ item.raw.lastName }}</v-col
              >
            </v-row>
            <v-row class="mb-0 pb-0">
              <v-col
                class="mb-0 pb-0"
                style="font-size: 24px; font-weight: bolder; text-align: right"
                cols="4"
                >التاريخ: {{ item.raw.createdAt }}</v-col
              >
            </v-row>
          </PrintLayout>
          <!--end of Form to print -->
          <v-btn class="ma-1"
            ><v-icon
              @click="reviewItem(item.raw.applyingId)"
              icon="mdi-eye-outline"
            ></v-icon
          ></v-btn>
        </td>
        <td></td>
      </tr>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> لا طلبات جديدة </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import PrintLayout from "@/layouts/PrintLayout.vue";

import { useApplyingStore } from "@/store/applying";
import { useUsersStore } from "@/store/user";

import { mapState } from "pinia";
export default {
  components: {
    PrintLayout,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "نوع الطلب",
        align: "start",
        key: "applicationType",
        sortable: false,
      },
      { title: "مقدم الطلب", key: "firstName" },
      { title: "القسم العلمي", key: "department" },
      { title: "الدرجة العلمي", key: "currentDegree" },
      { title: "تاريخ التقديم", key: "createdAt" },
      { title: "الإجراءات", key: "actions", sortable: false },
    ],
    DHheaders: [
      {
        title: "نوع الطلب",
        align: "start",
        key: "applicationType",
        sortable: false,
      },
      { title: "مقدم الطلب", key: "firstName" },
      { title: "الدرجة العلمي", key: "currentDegree" },
      { title: "تاريخ التقديم", key: "createdAt" },
      { title: "الإجراءات", key: "actions", sortable: false },
    ],
  }),

  computed: {
    ...mapState(useApplyingStore, ["applyings"]),
    ...mapState(useUsersStore, ["userRole"]),
  },

  created() {
    this.initialize();
  },

  methods: {
    // ...mapActions(useFacultyMembersStore, ["crudChange"]),
    reviewItem(id) {
      console.log(id);
      this.$router.push({ name: "ApplicationReview", params: { id: id } });
    },
    initialize() {
      this.desserts = this.applyings;
    },
    async printList() {
      console.log(this.applyings);
      await this.$htmlToPaper("formToPrint");
    },
  },
};
</script>
