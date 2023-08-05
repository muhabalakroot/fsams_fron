<template>
  <v-form ref="form">
    <v-container>
      <v-alert type="info" v-if="userRole == 'department-head'"
        >بعد الاتطلاع على الطلب والتحقق من صحته، قم بتعبأت الخانات تحت عنوان
        إجراءات القسم العلمي بأسفل هذه الصفحة وإضغط تسليم. في حال وجود نقص في
        الطلب إضغط على تغذر التسليم وأدخل سبب التغذر في خانة الملاحظات حتى يتمكن
        عضو هيئة التدريس من إضافة النواقص.</v-alert
      >
      <TheH1>البيانات الشخصية</TheH1>
      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>الاسم الأول</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.firstName"
          >
          </v-text-field>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable>الاسم الأب</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.fatherName"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>اللقب</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.lastName"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="6"
          ><TheTextFieldLable>الكلية</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="value"
            :items="colleges"
            v-model="user.faculty"
          >
          </v-select
        ></v-col>

        <!-- //كلية العلوم -->
        <v-col cols="6" v-if="user.faculty == 'كلية العلوم'"
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الهندسة -->
        <v-col cols="6" v-if="user.faculty == 'كلية الهندسة'"
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الفنون -->
        <v-col cols="6" v-if="user.faculty == 'كلية الفنون'"
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية اللغات -->
        <v-col cols="6" v-if="user.faculty == 'كلية اللغات'"
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- //كلية الزراعة -->
        <v-col cols="6" v-if="user.faculty == 'كلية الزراعة'"
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
            v-model="user.department"
          >
          </v-select
        ></v-col>

        <!-- كليتنا الغالية -->
        <v-col cols="6" v-if="user.faculty == 'كلية تقنية المعلومات'"
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
            v-model="user.department"
          >
          </v-select
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="6"
          ><TheTextFieldLable>الجنسية</TheTextFieldLable>
          <v-select
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            v-model="user.nationality"
            :items="nationalityList"
          ></v-select
        ></v-col>

        <v-col cols="6" v-if="user.nationality == 1"
          ><TheTextFieldLable>الرقم الوطني</TheTextFieldLable>
          <v-text-field
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.nationalNumber"
          >
          </v-text-field
        ></v-col>

        <v-col cols="6" v-if="user.nationality > 1 && user.nationality < 20"
          ><TheTextFieldLable>رقم جواز السفر</TheTextFieldLable>
          <v-text-field
            style="max-width: 1000px"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.passport"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <!-- البيانات الاكاديمية -->
      <TheH1>البيانات الأكاديمية</TheH1>

      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>المؤهل العلمي</TheTextFieldLable>
          <v-select
            v-model="user.qualification"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            item-title="value"
            item-value="id"
            :items="['ماجيستير', 'دكتوراه']"
          >
          </v-select>
        </v-col>
        <v-col cols="4"
          ><TheTextFieldLable>التخصص</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.generalMajor"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>التخصص الدقيق</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.exaxtMajor"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>الجامعة</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.univercity"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>البلد</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.country"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>المدينة</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.city"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>تاريخ الحصول عليه</TheTextFieldLable>
          <v-text-field
            type="date"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.dateOfObtaining"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <v-row>
        <v-col cols="4">
          <TheTextFieldLable>الدرجة العلمية الحالية</TheTextFieldLable>
          <v-select
            v-model="user.currentDegree"
            item-title="value"
            item-value="id"
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
          ><TheTextFieldLable>رقم قرار الترقية</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            v-model="user.promotoinDegreeNumber"
          >
          </v-text-field
        ></v-col>
        <v-col cols="4"
          ><TheTextFieldLable>تاريخ قرار الترقية</TheTextFieldLable>
          <v-text-field
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            type="date"
            v-model="user.degreeDateOfObtaing"
          >
          </v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable>قرار الترقية</TheTextFieldLable>
          <v-file-input
            v-if="$route.name !== 'ApplicationReview'"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            hint="الرجاء رفع صورة من قرار الترقية"
            v-model="user.promotoinDegreeFile"
          ></v-file-input>
          <v-btn v-if="$route.name == 'ApplicationReview'" class="ma-1"
            ><v-icon icon="mdi-eye-outline"></v-icon
          ></v-btn>
        </v-col>
      </v-row>

      <v-divider class="ma-2"></v-divider>

      <TheH1>الإنتاج العلمي</TheH1>

      <v-data-table
        :headers="headers"
        :items="scientificPaper"
        class="elevation-1 mt-3"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>
              {{ item.columns.scientificPaperTitle }}
            </td>
            <td>{{ item.columns.publisher }}</td>
            <td>
              {{ item.columns.dateOfpublishing }}
            </td>
            <td align="left">
              <v-btn v-if="$route.name !== 'ApplicationReview'" class="ma-1"
                ><v-icon
                  @click="editItem(item.raw)"
                  icon="mdi-pencil-outline"
                ></v-icon
              ></v-btn>
              <v-btn
                v-if="$route.name !== 'ApplicationReview'"
                color="error"
                class="ma-1"
                ><v-icon
                  icon="mdi-delete-outline"
                  @click="deleteItem(item.raw)"
                ></v-icon
              ></v-btn>
              <v-btn v-if="$route.name == 'ApplicationReview'" class="ma-1"
                ><v-icon
                  icon="mdi-eye-outline"
                  @click="editItem(item.raw)"
                ></v-icon
              ></v-btn>
            </td>
          </tr>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>الإنتاجات العلمية</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-if="$route.name !== 'ApplicationReview'"
                  color="primary"
                  variant="elevated"
                  dark
                  class="mb-2 mx-1"
                  v-bind="props"
                >
                  إضافة إنتاج علمي
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <!-- add new Paper here -->
                <v-card-text>
                  <v-form ref="form">
                    <v-row>
                      <v-col cols="4">
                        <TheTextFieldLable
                          >عنوان الإنتاج العلمي</TheTextFieldLable
                        >
                        <v-text-field
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          v-model="editedItem.scientificPaperTitle"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="4"
                        ><TheTextFieldLable>جهة النشر</TheTextFieldLable>
                        <v-text-field
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          v-model="editedItem.publisher"
                        >
                        </v-text-field
                      ></v-col>

                      <v-col cols="4"
                        ><TheTextFieldLable>نوع جهة النشر</TheTextFieldLable>
                        <v-select
                          v-model="editedItem.publisherType"
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          item-title="value"
                          item-value="id"
                          :items="[
                            { id: 1, value: 'مجلة علمية محلية' },
                            { id: 2, value: 'مجلة علمية عالمية' },
                            { id: 3, value: 'مؤتمر علمي محلي' },
                            { id: 4, value: 'مؤتمر علمي عالمي' },
                          ]"
                        >
                        </v-select>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="4"
                        ><TheTextFieldLable
                          >رابط موقع نشر الإنتاج العلمي</TheTextFieldLable
                        >
                        <v-text-field
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          v-model="editedItem.scientificPaperUrl"
                        >
                        </v-text-field
                      ></v-col>
                      <v-col cols="4"
                        ><TheTextFieldLable>تاريخ النشر</TheTextFieldLable>
                        <v-text-field
                          type="date"
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          v-model="editedItem.dateOfpublishing"
                        >
                        </v-text-field
                      ></v-col>
                    </v-row>

                    <v-divider class="ma-2"></v-divider>

                    <v-alert type="info">
                      يجب رفع الانتاج العلمي بدون أسماء
                    </v-alert>

                    <v-row>
                      <v-col cols="4"
                        ><TheTextFieldLable>الإنتاج العلمي</TheTextFieldLable>
                        <v-file-input
                          v-if="$route.name !== 'ApplicationReview'"
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          hint="الإنتاج العلمي بدون أسماء"
                          v-model="editedItem.scientificPaperNoNamesFile"
                        ></v-file-input>
                        <v-btn
                          v-if="$route.name == 'ApplicationReview'"
                          class="ma-1"
                          ><v-icon icon="mdi-eye-outline"></v-icon
                        ></v-btn>
                      </v-col>
                    </v-row>

                    <v-divider class="ma-2"></v-divider>

                    <v-alert type="info"
                      >في حالة تم نشر الإنتاج العلمي في مؤتمر علمي، يرجي رفع
                      رسالة من المؤتمر بقبول الإنتاج العلمي.</v-alert
                    >

                    <v-row>
                      <v-col cols="4"
                        ><TheTextFieldLable
                          >رسالة بقبول الإنتاج العلمي</TheTextFieldLable
                        >
                        <v-file-input
                          v-if="$route.name !== 'ApplicationReview'"
                          :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                          v-model="editedItem.acceptanceLetter"
                        ></v-file-input>
                        <v-btn
                          v-if="$route.name == 'ApplicationReview'"
                          class="ma-1"
                          ><v-icon icon="mdi-eye-outline"></v-icon
                        ></v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="$route.name !== 'ApplicationReview'"
                    class="mx-1"
                    color="blue-darken-1"
                    variant="outlined"
                    @click="close"
                  >
                    إلغاء
                  </v-btn>
                  <v-btn
                    v-if="$route.name !== 'ApplicationReview'"
                    class="mx-1"
                    color="blue-darken-1"
                    variant="elevated"
                    @click="validate"
                  >
                    حفظ
                  </v-btn>
                  <v-btn
                    v-if="$route.name == 'ApplicationReview'"
                    class="mx-1"
                    color="blue-darken-1"
                    variant="outlined"
                    @click="close"
                  >
                    عودة
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title>سيتم حذف هذه الورقة!</v-card-title>
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

        <template v-slot:bottom>
          <div></div>
        </template>

        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>

      <v-divider class="ma-2"></v-divider>

      <TheH1>المرفقات</TheH1>

      <v-table>
        <thead>
          <tr>
            <th class="text-right">البيان</th>
            <th class="text-right">الوصف</th>
            <th class="text-right">تم</th>
            <th class="text-center">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in num" :key="i">
            <td>{{ attachments[i].name }}</td>
            <td>{{ attachments[i].description }}</td>
            <td>
              <v-icon color="success">{{ attachments[i].isUploaded }}</v-icon>
            </td>
            <td>
              <v-file-input
                v-if="$route.name !== 'ApplicationReview'"
                density="compact"
                hide-details="true"
                v-model="selectedFile"
                @change="onFileChanged($event, attachments[i])"
              ></v-file-input>
              <v-btn v-if="$route.name == 'ApplicationReview'" class="ma-1"
                ><v-icon icon="mdi-eye-outline"></v-icon
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>

      <v-divider class="ma-2"></v-divider>
      <ApplicationConfirmation
        class="my-2"
        v-if="userRole == 'faculty-member'"
      ></ApplicationConfirmation>

      <div v-if="userRole == 'department-head'">
        <TheH1>إجراءات القسم العلمي</TheH1>

        <div>
          <div>هل تم عرض موضوع الطلب على مجلس القسم؟</div>
          <v-radio-group v-model="isShowen">
            <v-radio label="لا" value="false"></v-radio>
            <v-radio label="تعم" value="true"></v-radio>
          </v-radio-group>
        </div>

        <v-row v-if="isShowen == 'true'">
          <v-col cols="6"
            ><TheTextFieldLable>تاريخ العرض</TheTextFieldLable>
            <v-text-field
              v-model="user.showenToDepartment"
              type="date"
              :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            >
            </v-text-field
          ></v-col>
          <v-col cols="6"
            ><TheTextFieldLable>نسخه من محضر إجتماع القسم</TheTextFieldLable
            ><v-file-input
              v-model="user.departmentMeetingMinutes"
              hide-details="true"
            ></v-file-input
          ></v-col>
        </v-row>

        <div v-if="isShowen == 'true'">
          <div>بعد مراجعة البيانات المدرجة بطلب الترقية تبين لمجلس القسم:</div>
          <v-radio-group v-model="isComplate">
            <v-radio label="عدم مطابقة" value="false"></v-radio>
            <v-radio label="مطابقة" value="true"></v-radio>
          </v-radio-group>
        </div>

        <div v-if="isComplate == 'false'">
          <TheTextFieldLable>سبب عدم المطابقة</TheTextFieldLable>
          <v-text-field
            v-model="user.dhNote"
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
          >
          </v-text-field>
        </div>

        <div v-if="isComplate == 'true'">
          <div>
            وعليه تمت ................................... على استكمال إجراءات
            الترقية للدرجة العلمية التالية.
          </div>
          <v-radio-group v-model="isOkay">
            <v-radio label="عدم الموافقة" value="false"></v-radio>
            <v-radio label="الموافقة" value="true"></v-radio>
          </v-radio-group>
        </div>

        <v-divider class="ma-2"></v-divider>

        <div v-if="isComplate == 'true' && isOkay == 'true'">
          <div>يقترح مجلس القسم لجنة التقييم من الاخوة</div>
          <ReviewerCRUD></ReviewerCRUD>
        </div>
      </div>

      <div align="left">
        <v-btn @click="validate"> تسليم</v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";

import ApplicationConfirmation from "@/components/Dialogs/ApplicationConfirmation.vue";
import ReviewerCRUD from "@/components/ReviewersCRUD.vue";
export default {
  components: {
    ApplicationConfirmation,
    ReviewerCRUD,
  },
  data() {
    return {
      isOkay: "",
      isShowen: "",
      isComplate: "",
      num: [0, 1, 2, 3, 4],
      selectedFile: [],
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          align: "start",
          key: "scientificPaperTitle",
          title: "عنوان الانتاج العلمي",
          sortable: false,
        },
        { title: "جهة النشر", key: "publisher" },
        { title: "تاريخ النشر", key: "dateOfpublishing" },
        { title: "إجراءات", key: "id", align: "center" },
      ],
      colleges: [
        { id: 1, value: "كلية العلوم" },
        { id: 2, value: "كلية الهندسة" },
        { id: 3, value: "كلية الفنون" },
        { id: 4, value: "كلية اللغات" },
        { id: 5, value: "كلية الزراعة" },
        { id: 6, value: "كلية تقنية المعلومات" },
        { id: 7, value: "كلية الآداب" },
        { id: 8, value: "كلية الصيدلة" },
        { id: 9, value: "كلية الطب البشري" },
        { id: 10, value: "كلية الطب البيطري" },
        { id: 11, value: "كلية طب وجراحة الفم والأسنان" },
        { id: 12, value: "كلية التقنية الطبية" },
        { id: 13, value: "كلية الإقتصاد والعلوم السياسية" },
        { id: 14, value: "كلية التربية البدنية وعلوم الرياضة" },
        { id: 15, value: "كلية التربية/ قصر بن غشير" },
        { id: 16, value: "كلية التربية طرابلس" },
        { id: 17, value: "كلية التمريض" },
        { id: 18, value: "كلية التربية جنزور" },
        { id: 19, value: "كلية القانون" },
        { id: 20, value: "كلية العلوم الشرعية - تاجوراء" },
        { id: 21, value: "كلية العلوم الشرعية - سوق الجمعة" },
        { id: 22, value: "كلية الإقتصاد والإدارة تاجوراء" },
        { id: 23, value: "المرحلة التمهيدية" },
        { id: 24, value: "كلية الإعلام" },
      ],
      nationalityList: [
        { id: 1, value: "ليبي" },
        { id: 2, value: "فلسطيني" },
        { id: 3, value: "لبناني" },
        { id: 4, value: "سوري" },
        { id: 5, value: "أردني" },
        { id: 6, value: "سعودي" },
        { id: 7, value: "إماراتي" },
        { id: 8, value: "قطري" },
        { id: 9, value: "كويتي" },
        { id: 10, value: "عُماني" },
        { id: 11, value: "بحريني" },
        { id: 12, value: "مصري" },
        { id: 13, value: "تونسي" },
        { id: 14, value: "جزائري" },
        { id: 15, value: "مغربي" },
        { id: 16, value: "يمني" },
        { id: 17, value: "موريتاني" },
        { id: 18, value: "صومالي" },
        { id: 19, value: "جيبوتي" },
      ],
      user: null,
      attachments: null,
      scientificPaper: null,
      editedIndex: -1,
      editedItem: {
        id: new Date().toISOString(),
        scientificPaperTitle: null,
        publisher: null,
        publisherType: null,
        scientificPaperUrl: null,
        dateOfpublishing: null,
        scientificPaperNoNamesFile: [],
        acceptanceLetter: [],
      },
      defaultItem: {
        id: new Date().toISOString(),
        scientificPaperTitle: null,
        publisher: null,
        publisherType: null,
        scientificPaperUrl: null,
        dateOfpublishing: null,
        scientificPaperNoNamesFile: [],
        acceptanceLetter: [],
      },
    };
  },
  computed: {
    ...mapState(useApplyingStore, ["applyings"]),
    ...mapState(useUsersStore, ["userRole"]),
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
  methods: {
    initialize() {
      this.user = this.applyings[0];
      this.scientificPaper = this.applyings[0].scientificPaper;
      this.attachments = this.applyings[0].attachments;
    },
    editItem(item) {
      this.editedIndex = this.scientificPaper.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.scientificPaper.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.scientificPaper.splice(this.editedIndex, 1);
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
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.$router.push({ name: "ApplicationSubmited" });
      }
    },
  },
  created() {
    this.initialize();
  },
};
</script>
