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

  <v-divider class="ma-5"></v-divider>

  <TheH1>أولاً: بيانات عن مقدم الطلب العلمي.</TheH1>

  <v-form ref="form">
    <v-row>
      <v-col cols="6">
        <TheTextFieldLable>رقم قرار تشكيل اللجنة</TheTextFieldLable>
        <v-text-field
          style="max-width: 1000px"
          v-model="user.numberOfDecisionToFormTheCommittee"
        >
        </v-text-field>
      </v-col>
      <v-col cols="6"
        ><TheTextFieldLable>تاريخ صدور</TheTextFieldLable>
        <v-text-field
          style="max-width: 1000px"
          type="date"
          v-model="user.dateOfTheDecisionToFormTheCommittee"
        >
        </v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col cols="6"
        ><TheTextFieldLable>الكلية</TheTextFieldLable>
        <v-text-field style="max-width: 1000px" v-model="user.faculty">
        </v-text-field>
      </v-col>
      <v-col cols="6"
        ><TheTextFieldLable>القسم العلمي</TheTextFieldLable>
        <v-text-field style="max-width: 1000px" v-model="user.department">
        </v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col cols="6"
        ><TheTextFieldLable>التخصص العام</TheTextFieldLable>
        <v-text-field style="max-width: 1000px" v-model="user.generalMajor">
        </v-text-field
      ></v-col>

      <v-col cols="6"
        ><TheTextFieldLable>التخصص الدقيق</TheTextFieldLable>
        <v-text-field style="max-width: 1000px" v-model="user.exaxtMajor">
        </v-text-field
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
          v-model="user.currentDegree"
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
          ><v-radio-group inline v-model="user.typeOfPaper[0].value">
            <v-radio
              class="ml-3"
              label="ورقة بحثية"
              value="ورقة بحثية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب مرجعي"
              value="كتاب مرجعي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب منهجي"
              value="كتاب منهجي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="دراسة تخصصية"
              value="دراسة تخصصية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="نشاط علمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.typeOfPaper[1].value">
            <v-radio
              class="ml-3"
              label="ورقة بحثية"
              value="ورقة بحثية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب مرجعي"
              value="كتاب مرجعي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب منهجي"
              value="كتاب منهجي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="دراسة تخصصية"
              value="دراسة تخصصية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="نشاط علمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.typeOfPaper[2].value">
            <v-radio
              class="ml-3"
              label="ورقة بحثية"
              value="ورقة بحثية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب مرجعي"
              value="كتاب مرجعي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب منهجي"
              value="كتاب منهجي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="دراسة تخصصية"
              value="دراسة تخصصية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="نشاط علمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.typeOfPaper[3].value">
            <v-radio
              class="ml-3"
              label="ورقة بحثية"
              value="ورقة بحثية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب مرجعي"
              value="كتاب مرجعي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب منهجي"
              value="كتاب منهجي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="دراسة تخصصية"
              value="دراسة تخصصية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="نشاط علمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.typeOfPaper[4].value">
            <v-radio
              class="ml-3"
              label="ورقة بحثية"
              value="ورقة بحثية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب مرجعي"
              value="كتاب مرجعي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="كتاب منهجي"
              value="كتاب منهجي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="دراسة تخصصية"
              value="دراسة تخصصية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="نشاط علمي"
              value="نشاط علمي"
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
          ><v-radio-group inline v-model="user.publishedAt[0].value">
            <v-radio
              class="ml-3"
              label="مجلة علمية محلية"
              value="مجلة علمية محلية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مجلة علمية عالمية"
              value="مجلة علمية عالمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي محلي"
              value="مؤتمر علمي محلي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="مؤتمر علمي عالمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.publishedAt[1].value">
            <v-radio
              class="ml-3"
              label="مجلة علمية محلية"
              value="مجلة علمية محلية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مجلة علمية عالمية"
              value="مجلة علمية عالمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي محلي"
              value="مؤتمر علمي محلي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="مؤتمر علمي عالمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.publishedAt[2].value">
            <v-radio
              class="ml-3"
              label="مجلة علمية محلية"
              value="مجلة علمية محلية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مجلة علمية عالمية"
              value="مجلة علمية عالمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي محلي"
              value="مؤتمر علمي محلي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="مؤتمر علمي عالمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.publishedAt[3].value">
            <v-radio
              class="ml-3"
              label="مجلة علمية محلية"
              value="مجلة علمية محلية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مجلة علمية عالمية"
              value="مجلة علمية عالمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي محلي"
              value="مؤتمر علمي محلي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="مؤتمر علمي عالمي"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.publishedAt[4].value">
            <v-radio
              class="ml-3"
              label="مجلة علمية محلية"
              value="مجلة علمية محلية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مجلة علمية عالمية"
              value="مجلة علمية عالمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي محلي"
              value="مؤتمر علمي محلي"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="مؤتمر علمي عالمي"
              value="مؤتمر علمي عالمي"
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
          ><v-radio-group inline v-model="user.degreeOfRelevance[0].value">
            <v-radio
              class="ml-3"
              label="مرتبط بالتخصص"
              value="مرتبط بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="له علاقة بالتخصص"
              value="له علاقة بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="غير مرتبط بالتخصص"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.degreeOfRelevance[1].value">
            <v-radio
              class="ml-3"
              label="مرتبط بالتخصص"
              value="مرتبط بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="له علاقة بالتخصص"
              value="له علاقة بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="غير مرتبط بالتخصص"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.degreeOfRelevance[2].value">
            <v-radio
              class="ml-3"
              label="مرتبط بالتخصص"
              value="مرتبط بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="له علاقة بالتخصص"
              value="له علاقة بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="غير مرتبط بالتخصص"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.degreeOfRelevance[3].value">
            <v-radio
              class="ml-3"
              label="مرتبط بالتخصص"
              value="مرتبط بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="له علاقة بالتخصص"
              value="له علاقة بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="غير مرتبط بالتخصص"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.degreeOfRelevance[4].value">
            <v-radio
              class="ml-3"
              label="مرتبط بالتخصص"
              value="مرتبط بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="له علاقة بالتخصص"
              value="له علاقة بالتخصص"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="غير مرتبط بالتخصص"
              value="غير مرتبط بالتخصص"
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
          ><v-radio-group inline v-model="user.importance[0].value">
            <v-radio class="ml-3" label="مهم جداً" value="مهم جداً"></v-radio>
            <v-radio class="ml-3" label="مهم" value="مهم"></v-radio>
            <v-radio
              class="ml-3"
              label="متوسط الأهمية"
              value="متوسط الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="قليل الأهمية"
              value="قليل الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="ضعيف"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.importance[1].value">
            <v-radio class="ml-3" label="مهم جداً" value="مهم جداً"></v-radio>
            <v-radio class="ml-3" label="مهم" value="مهم"></v-radio>
            <v-radio
              class="ml-3"
              label="متوسط الأهمية"
              value="متوسط الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="قليل الأهمية"
              value="قليل الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="ضعيف"
            ></v-radio></v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.importance[2].value">
            <v-radio class="ml-3" label="مهم جداً" value="مهم جداً"></v-radio>
            <v-radio class="ml-3" label="مهم" value="مهم"></v-radio>
            <v-radio
              class="ml-3"
              label="متوسط الأهمية"
              value="متوسط الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="قليل الأهمية"
              value="قليل الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="ضعيف"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.importance[3].value">
            <v-radio class="ml-3" label="مهم جداً" value="مهم جداً"></v-radio>
            <v-radio class="ml-3" label="مهم" value="مهم"></v-radio>
            <v-radio
              class="ml-3"
              label="متوسط الأهمية"
              value="متوسط الأهمية"
            ></v-radio>
            <v-radio class="ml-3" label="قليل الأهمية" value="4"></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="ضعيف"
            ></v-radio></v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.importance[4].value">
            <v-radio class="ml-3" label="مهم جداً" value="مهم جداً"></v-radio>
            <v-radio class="ml-3" label="مهم" value="مهم"></v-radio>
            <v-radio
              class="ml-3"
              label="متوسط الأهمية"
              value="متوسط الأهمية"
            ></v-radio
            ><v-radio
              class="ml-3"
              label="قليل الأهمية"
              value="قليل الأهمية"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="ضعيف"
              value="ضعيف"
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
          ><v-radio-group inline v-model="user.review[0].value">
            <v-radio class="ml-3" label="مقبول" value="مقبول"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="غير مقبول"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 2">
        <v-col cols="2"> <p>البحث الثاني:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.review[1].value">
            <v-radio class="ml-3" label="مقبول" value="مقبول"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="غير مقبول"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 3">
        <v-col cols="2"> <p>البحث الثالث:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.review[2].value">
            <v-radio class="ml-3" label="مقبول" value="مقبول"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="غير مقبول"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 4">
        <v-col cols="2"> <p>البحث الرابع:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.review[3].value">
            <v-radio class="ml-3" label="مقبول" value="مقبول"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="غير مقبول"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>

      <v-row class="my-0" v-if="scientificPaper.length >= 5">
        <v-col cols="2"> <p>البحث الخامس:</p></v-col>
        <v-col class="py-0"
          ><v-radio-group inline v-model="user.review[4].value">
            <v-radio class="ml-3" label="مقبول" value="مقبول"></v-radio>
            <v-radio
              class="ml-3"
              label="غير مقبول"
              value="غير مقبول"
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
          ><v-radio-group inline v-model="user.promotionDegree">
            <v-radio class="ml-3" label="محاضر" value="محاضر"></v-radio>
            <v-radio
              class="ml-3"
              label="أستاذ مساعد"
              value="أستاذ مساعد"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="أستاذ مشارك"
              value="أستاذ مشارك"
            ></v-radio>
            <v-radio
              class="ml-3"
              label="أستاذ"
              value="أستاذ"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
    </div>

    <TheTextFieldLable
      >7- يوصي المقيم بعدم قبول الإنتاج العلمي المقدم للترقية للأسباب
      الاتية:</TheTextFieldLable
    >
    <v-textarea v-model="user.noteFromReviewer"></v-textarea>

    <v-divider class="mt-3"></v-divider>

    <TheH1>ثالثاً: بيانات المقيم.</TheH1>
    <v-row>
      <v-col cols="4">
        <TheTextFieldLable
          >اسم المقيم<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field v-model="user.reviewerName"> </v-text-field>
      </v-col>
      <v-col cols="4"
        ><TheTextFieldLable
          >الدرجة العلمية<span style="color: red">*</span></TheTextFieldLable
        ><v-select
          v-model="user.reviewerDegree"
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
        <v-text-field v-model="user.placeOfWork"> </v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <TheTextFieldLable
          >اسم المصرف<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field v-model="user.bank" style="max-width: 1000px">
        </v-text-field>
      </v-col>

      <v-col cols="6"
        ><TheTextFieldLable type="number"
          >رقم الحساب<span style="color: red">*</span></TheTextFieldLable
        >
        <v-text-field v-model="user.bankAccount" style="max-width: 1000px">
        </v-text-field
      ></v-col>
    </v-row>

    <div>
      <v-alert type="info"
        >بعد إكمالك النموذج. قم بطباعته عن طريق الضغط على زر طباعة،والتوقيع عليه
        ورفعة من جديد إلى النظام
      </v-alert>

      <TheTextFieldLable>طباعة الطلب </TheTextFieldLable>
      <v-btn class="ma-1" variant="outlined" @click="printList()"
        ><v-icon icon="mdi-printer"></v-icon>طباعة</v-btn
      >

      <v-row>
        <v-col cols="4"
          ><TheTextFieldLable
            >ارفع النموذج هنا بعد إضافة التوقيع
          </TheTextFieldLable>
          <v-file-input
            :rules="[(v) => !!v || 'هذا الحقل اجباري']"
            hint="الرجاء رفع صورة من قرار الترقية"
          ></v-file-input>
        </v-col>
      </v-row>

      <PrintLayout dir="rtl" hidden id="formToPrint" class="ma-auto">
        <v-container>
          <div style="text-align: center">
            <img src="@/assets/uot_logo.png" style="width: 150px" />
            <h1>وزراة التعليم العالي والبحث العلمي</h1>
            <h1>جامعة طرابلس</h1>
            <h1>إدارة شؤون أعضاء هيئة التدريس</h1>
            <h1>نموذج تقييم إنتاج علمي</h1>
          </div>

          <p style="font-size: 24px; text-align: right">
            أولاً: بيانات عن مقدم الطلب العلمي.
          </p>

          <v-row>
            <v-col style="font-size: 24px; text-align: right" cols="6">
              <p style="font-size: 24px; text-align: right">
                رقم قرار تشكيل اللجنة
              </p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.numberOfDecisionToFormTheCommittee }}
              </v-alert>
            </v-col>
            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p style="font-size: 24px; text-align: right">تاريخ صدور</p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.dateOfTheDecisionToFormTheCommittee }}
              </v-alert></v-col
            >
          </v-row>

          <v-row>
            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p style="font-size: 24px; text-align: right">الكلية</p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.faculty }}
              </v-alert></v-col
            >

            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p style="font-size: 24px; text-align: right">القسم العلمي</p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.department }}
              </v-alert></v-col
            >
          </v-row>

          <v-row>
            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p style="font-size: 24px; text-align: right">التخصص العام</p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.generalMajor }}
              </v-alert></v-col
            >

            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p style="font-size: 24px; text-align: right">التخصص الدقيق</p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.exaxtMajor }}
              </v-alert></v-col
            >
          </v-row>

          <v-row>
            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p style="font-size: 24px; text-align: right">
                الدرجة المطلوبة للترقية
              </p>
              <v-alert
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.currentDegree }}
              </v-alert></v-col
            >
          </v-row>

          <v-table style="border: 2px solid black; margin-top: 25px">
            <thead>
              <tr style="font-size: 24px; text-align: right">
                <th style="font-size: 24px; border: 2px solid black">ر.م</th>
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
                v-for="(item, i) in user.scientificPaper"
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

          <v-divider class="mt-3"></v-divider>

          <p style="font-size: 24px; text-align: right">ثانياً: التقييم.</p>

          <p style="font-size: 24px; text-align: right">
            1- نوع الإنتاج العلمي.<span style="color: red">*</span>
          </p>
          <div>
            <v-row class="my-0">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الاول:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.typeOfPaper[0].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 2">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثاني:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.typeOfPaper[1].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 3">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثالث:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.typeOfPaper[2].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 4">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الرابع:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.typeOfPaper[3].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 5">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الخامس:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.typeOfPaper[4].value }}
                </p>
              </v-col>
            </v-row>
          </div>

          <p style="font-size: 24px; text-align: right">
            2- الإنتاج العلمي منشور في.<span style="color: red">*</span>
          </p>
          <div>
            <v-row class="my-0" v-if="scientificPaper.length >= 1">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الأول:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.publishedAt[0].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 2">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثاني:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.publishedAt[1].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 3">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثالث:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.publishedAt[2].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 4">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الرابع:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.publishedAt[3].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 5">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الخامس:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.publishedAt[4].value }}
                </p>
              </v-col>
            </v-row>
          </div>

          <p style="font-size: 24px; text-align: right">
            3- علاقة الإنتاج العلمي بالتخصص.<span style="color: red">*</span>
          </p>
          <div>
            <v-row class="my-0" v-if="scientificPaper.length >= 1">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الأول:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.degreeOfRelevance[0].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 2">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثاني:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.degreeOfRelevance[1].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 3">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثالث:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.degreeOfRelevance[2].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 4">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الرابع:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.degreeOfRelevance[3].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 5">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الخامس:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.degreeOfRelevance[4].value }}
                </p>
              </v-col>
            </v-row>
          </div>

          <p style="font-size: 24px; text-align: right">
            4- أهمية الإنتاج العلمي.<span style="color: red">*</span>
          </p>
          <div>
            <v-row class="my-0" v-if="scientificPaper.length >= 1">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الأول:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.importance[0].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 2">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثاني:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.importance[1].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 3">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثالث:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.importance[2].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 4">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الرابع:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.importance[3].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 5">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الخامس:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.importance[4].value }}
                </p>
              </v-col>
            </v-row>
          </div>

          <p style="font-size: 24px; text-align: right">
            5- خلاصة رأي المقيم في الإنتاج العلمي المقدم - صالح للدرجة
            العلمية.<span style="color: red">*</span>
          </p>
          <div>
            <v-row class="my-0" v-if="scientificPaper.length >= 1">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الأول:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.review[0].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 2">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثاني:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.review[1].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 3">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الثالث:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.review[2].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 4">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الرابع:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.review[3].value }}
                </p>
              </v-col>
            </v-row>

            <v-row class="my-0" v-if="scientificPaper.length >= 5">
              <v-col style="font-size: 24px; text-align: right" cols="2">
                <p style="font-size: 24px; text-align: right">
                  البحث الخامس:
                </p></v-col
              >
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.review[4].value }}
                </p>
              </v-col>
            </v-row>
          </div>

          <p style="font-size: 24px; text-align: right">
            6- النتيجة النهائية للتقييم - يوصي المقيم بقبول الإنتاج العلمي
            المقدم للترقية إلى درجة.<span style="color: red">*</span>
          </p>
          <div>
            <v-row class="my-0">
              <v-col style="font-size: 24px; text-align: right">
                <p style="font-size: 24px">
                  {{ user.promotionDegree }}
                </p>
              </v-col>
            </v-row>
          </div>

          <p style="font-size: 24px; text-align: right">
            7- يوصي المقيم بعدم قبول الإنتاج العلمي المقدم للترقية للأسباب
            الاتية:
          </p>
          <v-textarea v-model="user.noteFromReviewer"></v-textarea>

          <v-divider class="mt-3"></v-divider>

          <p style="font-size: 24px; text-align: right">
            ثالثاً: بيانات المقيم.
          </p>
          <v-row>
            <v-col style="font-size: 24px; text-align: right" cols="4">
              <p style="font-size: 24px; text-align: right">
                اسم المقيم<span style="color: red">*</span>
              </p>
              <v-alert
                class="mt-0"
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.reviewerName }}
              </v-alert>
            </v-col>
            <v-col style="font-size: 24px; text-align: right" cols="4"
              ><p style="font-size: 24px; text-align: right">
                الدرجة العلمية<span style="color: red">*</span>
              </p>
              <v-alert
                class="mt-0"
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.reviewerDegree }}
              </v-alert></v-col
            >
            <v-col style="font-size: 24px; text-align: right" cols="4"
              ><p style="font-size: 24px; text-align: right">
                الجهة التابع لها<span style="color: red">*</span>
              </p>
              <v-alert
                class="mt-0"
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.placeOfWork }}
              </v-alert></v-col
            >
          </v-row>

          <v-row>
            <v-col style="font-size: 24px; text-align: right" cols="6">
              <p style="font-size: 24px; text-align: right">
                اسم المصرف<span style="color: red">*</span>
              </p>
              <v-alert
                class="mt-0"
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.bank }}
              </v-alert>
            </v-col>

            <v-col style="font-size: 24px; text-align: right" cols="6"
              ><p type="number">رقم الحساب<span style="color: red">*</span></p>
              <v-alert
                class="mt-0"
                style="font-size: 24px"
                density="compact"
                variant="outlined"
                >{{ user.bankAccount }}
              </v-alert></v-col
            >
          </v-row>
          <v-row class="mb-3 pb-0">
            <v-col></v-col>
            <v-col
              class="mb-0 pb-0"
              style="font-size: 24px; font-weight: bolder; text-align: right"
              cols="4"
              >التاريخ:....................................</v-col
            >
          </v-row>
          <v-row class="mb-0 pb-0">
            <v-col></v-col>
            <v-col
              class="mb-0 pb-0"
              style="
                font-size: 24px;
                font-weight: bolder;
                text-align: right;
                direction: rtl;
              "
              cols="4"
              >التوقيع:...................................</v-col
            >
          </v-row>
        </v-container>
      </PrintLayout>
    </div>

    <v-alert class="mt-4" type="info">
      يمكنك الضعط على زر "الحفظ والمتابعة في وقت لاحق" والخروج من نموذج التقييم
      ثم إكماله في وقت لاحق!
    </v-alert>

    <div align="left">
      <v-divider class="mt-3"></v-divider>
      <v-btn variant="text" class="mx-2">الحفظ والمتابعة في وقت لاحق</v-btn>
      <ApplicationConfirmation
        style="display: inline"
      ></ApplicationConfirmation>
    </div>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";

import { mapState } from "pinia";

import PrintLayout from "@/layouts/PrintLayout.vue";

import ApplicationConfirmation from "@/components/Dialogs/ApplicationConfirmation.vue";

export default {
  components: {
    PrintLayout,
    ApplicationConfirmation,
  },
  data() {
    return {
      user: null,
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
    async printList() {
      await this.$htmlToPaper("formToPrint");
    },
  },
  created() {
    this.initialize();
    console.log(this.scientificPaper.length);
  },
};
</script>
