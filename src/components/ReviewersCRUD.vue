<template>
  <v-data-table
    :headers="headers"
    :items="reviewers"
    item-value="id"
    class="elevation-1 mt-3"
    show-select
    v-model="selected"
  >
    <template v-slot:item.data-table-select="{ on, props }">
      <v-simple-checkbox
        color="green"
        v-bind="props"
        v-on="on"
      ></v-simple-checkbox>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td></td>
        <td>
          {{ item.columns.name }}
        </td>
        <td>{{ item.columns.univercity }}</td>
        <td>
          {{ item.columns.degree }}
        </td>
        <td>
          {{ item.columns.generalMajor }}
        </td>
        <td>
          <div v-if="userRole == 'department-head'">
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
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>لجنة التقييم</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-if="userRole == 'department-head'"
          v-model="dialog"
          width="1024"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              variant="elevated"
              dark
              class="mb-2 mx-1"
              v-bind="props"
            >
              إضافة محكم
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-form ref="form">
                <v-row>
                  <v-col cols="6">
                    <TheTextFieldLable>اسم المحكم</TheTextFieldLable>
                    <v-text-field
                      :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                      v-model="editedItem.name"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="6"
                    ><TheTextFieldLable>الجامعة التابع لها</TheTextFieldLable>
                    <v-text-field
                      :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                      v-model="editedItem.univercity"
                    >
                    </v-text-field
                  ></v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <TheTextFieldLable
                      >الدرجة العلمية الحالية</TheTextFieldLable
                    >
                    <v-select
                      v-model="editedItem.degree"
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
                  <v-col cols="6"
                    ><TheTextFieldLable>التخصص</TheTextFieldLable>
                    <v-text-field
                      :rules="[(v) => !!v || 'هذا الحقل اجباري']"
                      v-model="editedItem.generalMajor"
                    >
                    </v-text-field
                  ></v-col>
                </v-row>

                <v-divider class="ma-2"></v-divider>
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
        <v-dialog
          v-if="userRole == 'department-head'"
          v-model="dialogDelete"
          max-width="500px"
        >
          <v-card>
            <v-card-title>سيتم حذف هذه المحكم!</v-card-title>
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
</template>
<script>
import { useApplyingStore } from "@/store/applying";
import { useUsersStore } from "@/store/user";
import { mapWritableState } from "pinia";
import { mapState } from "pinia";

export default {
  data() {
    return {
      selected: [],
      reviewers: null,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          align: "start",
          key: "name",
          title: "اسم المحكم",
          sortable: false,
        },
        { title: "الجامعة التابع لها", key: "univercity" },
        { title: "الدرجة العلمية", key: "degree" },
        { title: "التخصص", key: "generalMajor" },
        { title: "الإجراءات", key: "id" },
      ],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        univercity: "",
        degree: "",
        generalMajor: "",
      },
      defaultItem: {
        id: "",
        name: "",
        univercity: "",
        degree: "",
        generalMajor: "",
      },
    };
  },
  computed: {
    ...mapState(useUsersStore, ["userRole"]),
    ...mapWritableState(useApplyingStore, ["applyings"]),
    formTitle() {
      return this.editedIndex === -1 ? "إضافة محكم" : "تعديل البيانات";
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
    editItem(item) {
      this.editedIndex = this.reviewers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.reviewers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.reviewers.splice(this.editedIndex, 1);
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
          Object.assign(this.reviewers[this.editedIndex], this.editedItem);
        } else {
          this.reviewers.push(this.editedItem);
        }
        this.close();
      }
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.$router.push({
          name: "ApplicationAttachment",
          id: this.$route.params.id,
        });
      }
    },
    initialize() {
      this.reviewers = this.applyings[0].reviewers;
      console.log(this.reviewers);
    },
  },
  created() {
    this.initialize();
  },
};
</script>
