<template>
  <TheH1>الإنتاج العلمي</TheH1>

  <v-alert type="warning">
    الانتاج العلمي يجب أن يكون صادر بعد تاريخ أخر ترقية. ويجب أيضاً أن لا يكون
    مستل من رسالة الماجيستير أو أطروحة الدكتوره.
  </v-alert>
  <v-form ref="form">
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
                    <v-col cols="12">
                      <TheTextFieldLable
                        >عنوان الإنتاج العلمي<span style="color: red"
                          >*</span
                        ></TheTextFieldLable
                      >
                      <v-text-field
                        style="width: 100%; max-width: 100%"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.scientificPaperTitle"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="4"
                      ><TheTextFieldLable
                        >جهة النشر<span style="color: red"
                          >*</span
                        ></TheTextFieldLable
                      >
                      <v-text-field
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.publisher"
                      >
                      </v-text-field
                    ></v-col>

                    <v-col cols="4"
                      ><TheTextFieldLable
                        >نوع جهة النشر<span style="color: red"
                          >*</span
                        ></TheTextFieldLable
                      >
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
                    <v-col cols="4"
                      ><TheTextFieldLable
                        >تاريخ النشر<span style="color: red"
                          >*</span
                        ></TheTextFieldLable
                      >
                      <v-text-field
                        type="date"
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.dateOfpublishing"
                      >
                      </v-text-field
                    ></v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12"
                      ><TheTextFieldLable
                        >رابط موقع نشر الإنتاج العلمي</TheTextFieldLable
                      >
                      <v-text-field
                        style="width: 100%; max-width: 100%"
                        v-model="editedItem.scientificPaperUrl"
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
                      ><TheTextFieldLable
                        >الإنتاج العلمي<span style="color: red"
                          >*</span
                        ></TheTextFieldLable
                      >
                      <v-file-input
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        hint="الإنتاج العلمي بدون أسماء"
                        v-model="editedItem.scientificPaperNoNamesFile"
                      ></v-file-input>
                    </v-col>
                  </v-row>

                  <v-divider class="ma-2"></v-divider>

                  <v-alert type="info"
                    >في حالة تم نشر الإنتاج العلمي في مؤتمر علمي، يرجي رفع رسالة
                    من المؤتمر بقبول الإنتاج العلمي.</v-alert
                  >

                  <v-row>
                    <v-col cols="4"
                      ><TheTextFieldLable
                        >رسالة بقبول الإنتاج العلمي</TheTextFieldLable
                      >
                      <v-file-input
                        :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                        v-model="editedItem.acceptanceLetter"
                      ></v-file-input>
                    </v-col>
                  </v-row>
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

    <div align="left">
      <v-divider></v-divider>
      <v-btn variant="text" class="mx-2"> حفظ </v-btn>
      <v-btn @click="validate"> حفظ واستمرار </v-btn>
    </div>
  </v-form>
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { mapActions, mapWritableState } from "pinia";
export default {
  data() {
    return {
      scientificPaper: null,
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
        { title: "إجراءات", key: "id" },
      ],
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
    ...mapWritableState(useApplyingStore, ["applyings"]),
    formTitle() {
      return this.editedIndex === -1 ? "إضافة إنتاج علمي" : "تعديل البيانات";
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
    ...mapActions(useApplyingStore, ["deleteScientificPapers"]),
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
    async save() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        if (this.editedIndex > -1) {
          Object.assign(
            this.scientificPaper[this.editedIndex],
            this.editedItem
          );
        } else {
          this.scientificPaper.push(this.editedItem);
        }
        this.close();
      }
    },
    async validate() {
      // const { valid } = await this.$refs.form.validate();
      // if (valid) {
      this.$router.push({
        name: "ApplicationAttachment",
        id: this.$route.params.id,
      });
      // }
    },
    initialize() {
      this.scientificPaper = this.applyings[0].scientificPaper;
      console.log(this.scientificPaper);
    },
  },
  created() {
    this.initialize();
  },
};
</script>
