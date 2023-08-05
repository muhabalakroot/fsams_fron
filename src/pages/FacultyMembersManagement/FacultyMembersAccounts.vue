<template>
  <!-- :sort-by="[{ key: 'calories', order: 'asc' }]" -->
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:item="{ item }">
      <tr>
        <td>
          {{ item.columns.firstName }}
        </td>
        <td>{{ item.columns.email }}</td>
        <td>
          {{ item.columns.faculty }}
        </td>
        <td>{{ item.columns.department }}</td>
        <td>{{ item.columns.qualification }}</td>
        <td>{{ item.columns.currentDegree }}</td>
        <td>
          <v-btn class="ma-1"
            ><v-icon
              @click="editItem(item.raw)"
              icon="mdi-pencil-outline"
            ></v-icon
          ></v-btn>
          <v-btn color="error" class="ma-1"
            ><v-icon
              icon="mdi-delete-outline"
              @click="deleteItem(item.raw)"
            ></v-icon
          ></v-btn>
        </td>
        <td></td>
      </tr>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>أعضاء هيئة التدريس بالقسم العلمي</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" width="1024">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              variant="elevated"
              dark
              class="mb-2 mx-1"
              v-bind="props"
            >
              إضافة عضو هيئة تدريس
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-form ref="form">
                <v-container>
                  <v-row
                    ><v-col cols="4">
                      <TheTextFieldLable>الاسم الأول</TheTextFieldLable>
                      <v-text-field
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.firstName"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="4"
                      ><TheTextFieldLable>الاسم الأب</TheTextFieldLable>
                      <v-text-field
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.fatherName"
                      >
                      </v-text-field
                    ></v-col>
                    <v-col cols="4"
                      ><TheTextFieldLable>اللقب</TheTextFieldLable>
                      <v-text-field
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.lastName"
                      >
                      </v-text-field></v-col
                  ></v-row>
                  <v-row>
                    <v-col cols="4"
                      ><TheTextFieldLable>البريد الجامعي</TheTextFieldLable>
                      <v-text-field
                        placeholder="example@uot.edu.ly"
                        :rules="[
                          (v) => !!v || 'يجب ادخال البريد الجامعي',
                          (v) =>
                            (v && /^[^@]+@uot.edu.ly$/.test(v)) ||
                            'البريد الجامعي غير صحيح',
                        ]"
                        v-model="editedItem.email"
                      >
                      </v-text-field
                    ></v-col>
                    <v-col cols="4"
                      ><TheTextFieldLable>الكلية</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        item-title="value"
                        item-value="value"
                        :items="colleges"
                        v-model="editedItem.faculty"
                      >
                      </v-select
                    ></v-col>

                    <!-- //كلية العلوم -->
                    <v-col cols="4" v-if="editedItem.faculty == 'كلية العلوم'"
                      ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'قسم الرياضيات',
                          'قسم علم الحيوان',
                          'قسم الفيزياء',
                          'قسم الكيمياء',
                          'قسم علم النبات',
                          'قسم الجيولوجيا',
                          'قسم علوم الحاسب الآلي',
                          'قسم الإحصاء',
                        ]"
                        v-model="editedItem.department"
                      >
                      </v-select
                    ></v-col>

                    <!-- //كلية الهندسة -->
                    <v-col cols="4" v-if="editedItem.faculty == 'كلية الهندسة'"
                      ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'قسم الهندسة الكهربائية والالكترونية',
                          'قسم الهندسة الميكانيكية والصناعية',
                          'قسم الهندسة الكيميائية',
                          'قسم هندسة العمارة والتخطيط العمراني',
                          'قسم هندسة النفط',
                          'قسم الهندسة الجيولوجية',
                          'قسم هندسة التعدين',
                          'قسم الهندسة النووية',
                          'قسم هندسة الحاسب الآلي',
                          'قسم هندسة المواد والمعادن',
                          'قسم الهندسة البحرية والمنصات العائمة',
                          'قسم هندسة الطيران',
                          'قسم الهندسة المدنية',
                          'قسم الدراسة والامتحانات والمرحلة العامة',
                          'قسم الهندسة الطبية',
                          'قسم الإدارة الهندسية',
                        ]"
                        v-model="editedItem.department"
                      >
                      </v-select
                    ></v-col>

                    <!-- //كلية الفنون -->
                    <v-col cols="4" v-if="editedItem.faculty == 'كلية الفنون'"
                      ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'قسم الفنون المرئية',
                          'قسم الفنون الدرامية',
                          'قسم التصميم الداخلي',
                          'قسم الفنون الموسيقية',
                          'قسم الفنون الجميلة والتطبيقية',
                        ]"
                        v-model="editedItem.department"
                      >
                      </v-select
                    ></v-col>

                    <!-- //كلية اللغات -->
                    <v-col cols="4" v-if="editedItem.faculty == 'كلية اللغات'"
                      ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'قسم اللغة الإنجليزية',
                          'قسم اللغة العربية',
                          'قسم اللغة الاسبانية',
                          'قسم اللغات الأفروآسيوية',
                          'قسم اللغة الإيطالية',
                          'قسم الترجمة والتعريب',
                          'المرحلة العامة',
                          'قسم اللغة الفرنسية',
                        ]"
                        v-model="editedItem.department"
                      >
                      </v-select
                    ></v-col>

                    <!-- //كلية الزراعة -->
                    <v-col cols="4" v-if="editedItem.faculty == 'كلية الزراعة'"
                      ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'قسم الاقتصاد الزراعي',
                          'قسم الزراعات المائية',
                          'قسم المراعي والغابات',
                          'قسم اقتصاد المنزلي',
                          'قسم المحاصيل الزراعية',
                          'قسم الهندسة الزراعية',
                          'قسم البستنة',
                          'قسم وقاية النبات',
                          'قسم التربة والمياه',
                          'قسم الانتاج الحيواني',
                          'قسم علوم وتقنية الاغذية',
                        ]"
                        v-model="editedItem.department"
                      >
                      </v-select
                    ></v-col>

                    <!-- كليتنا الغالية -->
                    <v-col
                      cols="4"
                      v-if="editedItem.faculty == 'كلية تقنية المعلومات'"
                      ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
                      <v-select
                        style="max-width: 1000px"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'قسم هندسة البرمجيات',
                          'قسم الشبكات',
                          'قسم نظم المعلومات',
                          'قسم الحوسبة المتنقلة',
                          'قسم تقنيات الإنترنت',
                          'قسم المرحلة العامة',
                        ]"
                        v-model="editedItem.department"
                      >
                      </v-select
                    ></v-col>

                    <!-- المؤهل العلمي -->
                  </v-row>
                  <v-row>
                    <v-col cols="4">
                      <TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
                      <v-select
                        v-model="editedItem.qualification"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="['ماجيستير', 'دكتوراه']"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="4">
                      <TheTextFieldLable
                        >الدرجة العلمية الحالية</TheTextFieldLable
                      >
                      <v-select
                        v-model="editedItem.currentDegree"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        :items="[
                          'محاضر مساعد',
                          'محاضر',
                          'أستاذ مساعد',
                          'أستاذ مشارك',
                          'أستاذ',
                        ]"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="4"
                      ><TheTextFieldLable>تاريخ قرار الترقية</TheTextFieldLable>
                      <v-text-field
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        type="date"
                        v-model="editedItem.degreeDateOfObtaing"
                      >
                      </v-text-field
                    ></v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="mx-1"
                color="blue-darken-1"
                variant="outlined"
                @click="close"
              >
                إلغاء
              </v-btn>
              <v-btn
                class="mx-1"
                color="blue-darken-1"
                variant="elevated"
                @click="save"
              >
                حفظ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title>سيتم حذف عضو هيئة التدريس!</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div align="left">
                <v-btn
                  color="blue-darken-1"
                  variant="outlined"
                  @click="closeDelete"
                  >إلغاء</v-btn
                >
                <v-btn
                  class="mx-1"
                  color="error"
                  variant="elevated"
                  @click="deleteItemConfirm"
                  >حذف</v-btn
                >
              </div>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>

  <div align="left">
    <v-divider></v-divider>
    <v-btn variant="text" class="mx-2"> </v-btn>
    <v-btn @click="saveToState">حفظ التغييرات</v-btn>
  </div>
</template>
<script>
import { useFacultyMembersStore } from "@/store/facultyMembers";
import { mapState, mapActions } from "pinia";
export default {
  data: () => ({
    colleges: [
      "كلية العلوم",
      "كلية الهندسة",
      "كلية الفنون",
      "كلية اللغات",
      "كلية الزراعة",
      "كلية تقنية المعلومات",
      "كلية الآداب",
      "كلية الصيدلة",
      "كلية الطب البشري",
      "كلية الطب البيطري",
      "كلية طب وجراحة الفم والأسنان",
      "كلية التقنية الطبية",
      "كلية الإقتصاد والعلوم السياسية",
      "كلية التربية البدنية وعلوم الرياضة",
      "كلية التربية/ قصر بن غشير",
      "كلية التربية طرابلس",
      "كلية التمريض",
      "كلية التربية جنزور",
      "كلية القانون",
      "كلية العلوم الشرعية - تاجوراء",
      "كلية العلوم الشرعية - سوق الجمعة",
      "كلية الإقتصاد والإدارة تاجوراء",
      "المرحلة التمهيدية",
      "كلية الإعلام",
    ],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "الاسم",
        align: "start",
        key: "firstName",
        sortable: false,
      },
      { title: "البريد الجامعي", key: "email" },
      { title: "الكلية", key: "faculty" },
      { title: "القسم العلمي", key: "department" },
      { title: "المؤهل العلمي", key: "qualification" },
      { title: "الدرجة العلمي", key: "currentDegree" },
      { title: "الإجراءات", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      email: null,
      firstName: null,
      fatherName: null,
      lastName: null,
      nationality: null,
      faculty: null,
      department: null,
      qualification: null,
      currentDegree: null,
      dateOfObtaining: null,
    },
    defaultItem: {
      email: null,
      firstName: null,
      fatherName: null,
      lastName: null,
      nationality: null,
      faculty: null,
      department: null,
      qualification: null,
      currentDegree: null,
      dateOfObtaining: null,
    },
  }),

  computed: {
    ...mapState(useFacultyMembersStore, ["FacultyMembers"]),
    formTitle() {
      return this.editedIndex === -1
        ? "إضافة عضو هيئة تدريس"
        : "تعديل البيانات";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions(useFacultyMembersStore, ["crudChange"]),
    saveToState() {
      this.crudChange(this.desserts);
    },
    initialize() {
      this.desserts = this.FacultyMembers;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          this.desserts.push(this.editedItem);
        }
        this.close();
      }
    },
  },
};
</script>
