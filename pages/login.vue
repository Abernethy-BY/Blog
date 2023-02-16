<script lang="ts" setup>
definePageMeta({
  layout: 'login',
})
const route = useRouter()
// do not use same name with ref
const form = $ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  // consola.log('submit!')
  // console.info('点击按钮')
  route.replace({ path: '/' })
}
</script>

<template>
  <div class="login-box" po-r z-1 w-50 h-50>
    <el-form class="login-form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Create
        </el-button>
        <!-- <el-button>Cancel</el-button> -->
      </el-form-item>
    </el-form>

    <div class="hover-test">
      <span class="hover-span">
        hover1</span>

      <span class="hover-span hover-change">hover2</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-box {
  background: rgba(116, 125, 140, .5);

  :deep(.login-form) {
    padding: 5%;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .el-form-item__label {
      color: antiquewhite;
    }

    .el-checkbox__label {
      color: antiquewhite;
    }

    .el-radio__label {
      color: antiquewhite;

    }
  }

  .hover-test {
    .hover-span {
      &:after {
        content: 'bb';
        color: aqua;
      }
    }
  }
}
</style>

<style lang="css" scoped>
/* .hover-test .hover-span {
  color: red;
}
not()
net-child(){}

.hover-test>.hover-span:before {
  content: 'aa';
  color: aqua;
}

.hover-test>.hover-span:after {
  content: '';
  color: aqua;
} */
</style>
