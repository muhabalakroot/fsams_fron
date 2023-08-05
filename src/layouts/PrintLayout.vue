<template>
  <!-- <div class="container mt-5">
      <div style="text-align: center; margin-bottom: 50px">
        <img src="@/assets/uot_logo.png" alt="uot" width="150px" />

        <h2>جامعة طرابلس</h2>
        <h2>إدارة شؤون أعضاء هيئة التدريس</h2>
        <h2>طلب ترقية عضو هيئة تدريس</h2>
      </div>
      <div style="text-align: right" class="row">
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px"
            >الاسم بالكامل</label
          >
          <input
            type="text"
            id="nameofid"
            class="form-control"
            style="font-size: 18px"
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px"
            >الاسم الأب</label
          >
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px">اللقب</label>
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px">الكلية</label>
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px"
            >القسم العلمي</label
          >
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px"
            >المؤهل العلمي</label
          >
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px"
            >الدرجة العلمية</label
          >
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
        <div class="col-md-12 mb-4">
          <label class="font-weight-bold" style="font-size: 20px"
            >تاريخ الحصول عليها</label
          >
          <input
            type="text"
            class="form-control"
            style="font-size: 18px"
            readonly
          />
        </div>
      </div>
    </div> -->

  <div
    :id="id"
    class="show-on-print text-center"
    style="
      text-align: center !important;
      font-family: 'Ciaro', Arial, monospace;
    "
    dir="rtl"
  >
    <img src="@/assets/uot_logo.png" alt="uot" width="100%" />
    <slot dir="rtl"></slot>
  </div>
</template>

<script>
export default {
  props: ["id", "firstName", "fatherName", "lastName"],
};
</script>
