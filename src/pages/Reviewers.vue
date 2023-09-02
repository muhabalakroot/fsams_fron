<template>
  <v-row>
    <v-col class="ma-2" align="center">
      <TheH1 style="padding: 0px !important"
        >وزارة التعليم العالي والبحث العلمي</TheH1
      >
      <TheH1 style="padding: 0px !important">جامعة طرابلس</TheH1>
      <TheH1 style="padding: 0px !important"
        >إدارة شؤون أعضاء هيئة التدريس</TheH1
      >
      <TheH1 style="padding: 0px !important">نموذج تقييم إنتاج علمي</TheH1>
    </v-col>
    <v-col class="ma-2" align="center">
      <v-row>
        <v-col
          ><v-img max-width="120" src="@/assets/uot_logo.png"></v-img
        ></v-col>
        <v-col><v-img max-width="120" src="@/assets/MHESR.jpg"></v-img></v-col>
        <v-col></v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-alert class="mt-4" type="info">
    يمكنك الضعط على زر "حفظ" والخروج من النظام، ثم إكمال الطلب في وقت لاحق!
  </v-alert>
  <TheH1>أولاً: بيانات عن مقدم الطلب العلمي.</TheH1>

  <v-form ref="form">
    <v-row>
      <v-col cols="6">
        <TheTextFieldLable>رقم قرار تشكيل اللجنة</TheTextFieldLable>
        <v-text-field style="max-width: 1000px"> </v-text-field>
      </v-col>
      <v-col cols="6"
        ><TheTextFieldLable>تاريخ صدور</TheTextFieldLable>
        <v-text-field style="max-width: 1000px" type="date"> </v-text-field
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
        ><TheTextFieldLable>التخصص العام</TheTextFieldLable>
        <v-text-field style="max-width: 1000px"> </v-text-field
      ></v-col>

      <v-col cols="6"
        ><TheTextFieldLable>التخصص الدقيق</TheTextFieldLable>
        <v-text-field style="max-width: 1000px"> </v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col cols="6"
        ><TheTextFieldLable>الدرجة المطلوبة للترقية</TheTextFieldLable>
        <v-select
          style="max-width: 1000px"
          :items="[
            'محاضر مساعد',
            'محاضر',
            'أستاذ مساعد',
            'أستاذ مشارك',
            'أستاذ',
          ]"
        >
        </v-select
      ></v-col>
    </v-row>

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
          <td>
            <v-btn class="ma-1"><v-icon icon="mdi-eye-outline"></v-icon></v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>الإنتاجات العلمية</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:bottom>
        <div></div>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>

    <v-divider class="mt-3"></v-divider>

    <TheH1>ثانياً: التقييم.</TheH1>

    <TheTextFieldLable
      >1- نوع الإنتاج العلمي.<span style="color: red"
        >*</span
      ></TheTextFieldLable
    >
    <div>
      <v-row class="my-0">
        <v-col cols="2"> <p>البحث الاول:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="ورقة بحثية" value="1"></v-radio>
            <v-radio class="ml-3" label="كتاب مرجعي" value="2"></v-radio>
            <v-radio class="ml-3" label="كتاب منهجي" value="3"></v-radio>
            <v-radio class="ml-3" label="دراسة تخصصية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="ورقة بحثية" value="1"></v-radio>
            <v-radio class="ml-3" label="كتاب مرجعي" value="2"></v-radio>
            <v-radio class="ml-3" label="كتاب منهجي" value="3"></v-radio>
            <v-radio class="ml-3" label="دراسة تخصصية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="ورقة بحثية" value="1"></v-radio>
            <v-radio class="ml-3" label="كتاب مرجعي" value="2"></v-radio>
            <v-radio class="ml-3" label="كتاب منهجي" value="3"></v-radio>
            <v-radio class="ml-3" label="دراسة تخصصية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="ورقة بحثية" value="1"></v-radio>
            <v-radio class="ml-3" label="كتاب مرجعي" value="2"></v-radio>
            <v-radio class="ml-3" label="كتاب منهجي" value="3"></v-radio>
            <v-radio class="ml-3" label="دراسة تخصصية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="ورقة بحثية" value="1"></v-radio>
            <v-radio class="ml-3" label="كتاب مرجعي" value="2"></v-radio>
            <v-radio class="ml-3" label="كتاب منهجي" value="3"></v-radio>
            <v-radio class="ml-3" label="دراسة تخصصية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >2- الإنتاج العلمي منشور في.<span style="color: red"
        >*</span
      ></TheTextFieldLable
    >
    <div>
      <v-row class="my-0" v-if="scientificPaper.length >= 1">
        <v-col cols="2"> <p>البحث الأول:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مجلية علمية محلية" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="مجلية علمية عالمية"
              value="2"
            ></v-radio>
            <v-radio class="ml-3" label="مؤتمر علمي محلي" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مجلية علمية محلية" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="مجلية علمية عالمية"
              value="2"
            ></v-radio>
            <v-radio class="ml-3" label="مؤتمر علمي محلي" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مجلية علمية محلية" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="مجلية علمية عالمية"
              value="2"
            ></v-radio>
            <v-radio class="ml-3" label="مؤتمر علمي محلي" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مجلية علمية محلية" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="مجلية علمية عالمية"
              value="2"
            ></v-radio>
            <v-radio class="ml-3" label="مؤتمر علمي محلي" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مجلية علمية محلية" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="مجلية علمية عالمية"
              value="2"
            ></v-radio>
            <v-radio class="ml-3" label="مؤتمر علمي محلي" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >3- علاقة الإنتاج العلمي بالتخصص.<span style="color: red"
        >*</span
      ></TheTextFieldLable
    >
    <div>
      <v-row class="my-0" v-if="scientificPaper.length >= 1">
        <v-col cols="2"> <p>البحث الأول:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مرتبط بالتخصص" value="1"></v-radio>
            <v-radio class="ml-3" label="له علاقة بالتخصص" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مرتبط بالتخصص" value="1"></v-radio>
            <v-radio class="ml-3" label="له علاقة بالتخصص" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مرتبط بالتخصص" value="1"></v-radio>
            <v-radio class="ml-3" label="له علاقة بالتخصص" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مرتبط بالتخصص" value="1"></v-radio>
            <v-radio class="ml-3" label="له علاقة بالتخصص" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مرتبط بالتخصص" value="1"></v-radio>
            <v-radio class="ml-3" label="له علاقة بالتخصص" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >4- أهمية الإنتاج العلمي.<span style="color: red"
        >*</span
      ></TheTextFieldLable
    >
    <div>
      <v-row class="my-0" v-if="scientificPaper.length >= 1">
        <v-col cols="2"> <p>البحث الأول:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مهم جداً" value="1"></v-radio>
            <v-radio class="ml-3" label="مهم" value="3"></v-radio>
            <v-radio class="ml-3" label="متوسط الأهمية" value="4"></v-radio>
            <v-radio class="ml-3" label="قليل الأهمية" value="5"></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="6"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مهم جداً" value="1"></v-radio>
            <v-radio class="ml-3" label="مهم" value="3"></v-radio>
            <v-radio class="ml-3" label="متوسط الأهمية" value="4"></v-radio>
            <v-radio class="ml-3" label="قليل الأهمية" value="5"></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="6"
            ></v-radio></v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مهم جداً" value="1"></v-radio>
            <v-radio class="ml-3" label="مهم" value="3"></v-radio>
            <v-radio class="ml-3" label="متوسط الأهمية" value="4"></v-radio>
            <v-radio class="ml-3" label="قليل الأهمية" value="5"></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="6"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مهم جداً" value="1"></v-radio>
            <v-radio class="ml-3" label="مهم" value="3"></v-radio>
            <v-radio class="ml-3" label="متوسط الأهمية" value="4"></v-radio>
            <v-radio class="ml-3" label="قليل الأهمية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="6"
            ></v-radio></v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مهم جداً" value="1"></v-radio>
            <v-radio class="ml-3" label="مهم" value="3"></v-radio>
            <v-radio class="ml-3" label="متوسط الأهمية" value="4"></v-radio
            ><v-radio class="ml-3" label="قليل الأهمية" value="5"></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="6"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >5- خلاصة رأي المقيم في الإنتاج العلمي المقدم - صالح للدرجة العلمية.<span
        style="color: red"
        >*</span
      ></TheTextFieldLable
    >
    <div>
      <v-row class="my-0" v-if="scientificPaper.length >= 1">
        <v-col cols="2"> <p>البحث الأول:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مقبول" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="2"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مقبول" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value=""
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مقبول" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="2"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مقبول" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="2"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="مقبول" value="1"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="2"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >6- النتيجة النهائية للتقييم - يوصي المقيم بقبول الإنتاج العلمي المقدم
      للترقية إلى درجة.<span style="color: red">*</span></TheTextFieldLable
    >
    <div>
      <v-row class="my-0">
        <v-col class="py-0"
          ><v-radio-group inline>
            <v-radio class="ml-3" label="محاضر" value="1"></v-radio>
            <v-radio class="ml-3" label="أستاذ مساعد" value="2"></v-radio>
            <v-radio class="ml-3" label="أستاذ مشارك" value="3"></v-radio>
            <v-radio
              class="ml-3"
              label="أستاذ"
              value="4"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >7- يوصي المقيم بعدم قبول الإنتاج العلمي المقدم للترقية للأسباب
      الاتية:</TheTextFieldLable
    >
    <v-textarea></v-textarea>

    <v-divider class="mt-3"></v-divider>

    <TheH1>ثالثاً: بيانات المقيم.</TheH1>
    <v-row>
      <v-col cols="4">
        <TheTextFieldLable
          >اسم المقيم<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field> </v-text-field>
      </v-col>
      <v-col cols="4"
        ><TheTextFieldLable
          >الدرجة العلمية<span style="color: red">*</span></TheTextFieldLable
        ><v-select
          :items="[
            'محاضر مساعد',
            'محاضر',
            'أستاذ مساعد',
            'أستاذ مشارك',
            'أستاذ',
          ]"
        >
        </v-select
      ></v-col>
      <v-col cols="4"
        ><TheTextFieldLable
          >الجهة التابع لها<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field> </v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <TheTextFieldLable
          >اسم المصرف<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field style="max-width: 1000px"> </v-text-field>
      </v-col>

      <v-col cols="6"
        ><TheTextFieldLable type="number"
          >رقم الحساب<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field style="max-width: 1000px"> </v-text-field
      ></v-col>
    </v-row>

    <v-alert class="mt-4" type="info">
      يمكنك الضعط على زر "الحفظ والمتابعة في وقت لاحق" والخروج من نموذج التقييم
      ثم إكماله في وقت لاحق!
    </v-alert>

    <div align="left">
      <v-divider class="mt-3"></v-divider>
      <v-btn variant="text" class="mx-2">الحفظ والمتابعة في وقت لاحق</v-btn>
      <v-btn> تسليم </v-btn>
    </div>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { mapState } from "pinia";
export default {
  data() {
    return {
      user: null,
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
      headers: [
        {
          align: "start",
          key: "scientificPaperTitle",
          title: "عنوان الانتاج العلمي",
          sortable: false,
        },
        { title: "جهة النشر", key: "publisher" },
        { title: "تاريخ النشر", key: "dateOfpublishing" },
        { title: "عرض", key: "id" },
      ],
      scientificPaper: null,
    };
  },
  computed: {
    ...mapState(useApplyingStore, ["applyings"]),
  },
  methods: {
    async goToAcadimec() {
      const { valid } = await this.$refs.form.validate();
      if (valid)
        this.$router.push({
          name: "ApplicationAcadimecInfo",
          params: this.$route.params.id,
        });
    },
    initialize() {
      this.user = this.applyings[0];
      this.scientificPaper = this.applyings[0].scientificPaper;
    },
  },
  created() {
    this.initialize();
    console.log(this.scientificPaper.length);
  },
};
</script>
