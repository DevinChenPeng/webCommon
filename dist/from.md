# API 文档

## 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- |------|:----:|-----|:-----:|
| forms | form表单配置对象数组。详情见[**Form Item 属性**](#form-item-属性) | array[object] | - | - |
| size | 全局的表单尺寸 | string | large/small/mini | small |
| showResetBtn | 是否显示'重置'按钮 | boolean | - | false|
| inline | 行内表单模式 | boolean | - | false |
| fuzzy | 搜索条件是否支持模糊搜索，全局设置，仅支持 local 数据展示 | boolean | - | false |
| labelWidth | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | number | - | - |
| itemWidth | 表单域宽度 | number | - | - |
|submitHandler | 查询按钮的click处理函数，接收form表单对象数据作为第一个参数 | function | - | - |
| submitLoading | 查询按钮的加载中状态 | boolean | - | - |
| submitBtnText | 查询按钮的文本 | string | - | 查询 |
| resetBtnText | 重置按钮的文本 | string | - | 重置 |
| resetBtnCallback | 重置按钮点击事件的回调函数，在重置了搜索条件之后执行 | function | - | - |
| labelPosition | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string | right/left/top | top |
| gutter | 每个form item的间隔                                          | number | - | 20 |

注：更多属性，请参考 Element UI [Form 组件的文档](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/form.md#form-attributes)。

## Form Item 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- |------|:----:|-----|:-----:|
| label | form表单标签 | string | - | - |
| prop | form表单属性key值 | string | - | - |
| itemType | 表单类型，目前支持input/select/date三种表单 | string | input/select/date | - |
| size | 表单尺寸 | string | large/small/mini | - |
| labelWidth | 表单域标签的宽度 | number | - | - |
| itemWidth | 表单域宽度 | number | - | - |
| placeholder | 表单占位文本 | string | - | - |
| editable | 是否可输入，对date有效 | boolean | true/false | true |
| disabled | 禁用 | boolean | true/false | false |
| readonly | 只读 | boolean | true/false | false |
| options | 填充select下拉option的数组数据 | [string]/[object] | - | - |
| selectResultField | select远程数据接口返回值的数据对应key值，对应的数组中的元素可以是string或object | string | | - |
| selectUrl | select远程数据接口地址，设置该属性后，selectFetch属性则无效 | string - | - ||
| selectParams | 调用select远程接口的参数 | object | - | - |
| valueKey | 当option是对象时有效。select option的value的key值 | string | - | value |
| labelKey | 当option是对象时有效。select option的label的key值 | string | - | label |
| disabledTimeRange | 当前时间日期选择器特有的选项，对 date 有效，参考时间选择器组件 | object | - | - |
| rules | 表单验证规则 | array | - | - |
| pickerOptions | 当前时间日期选择器特有的选项，对 date 有效 | object | - | - |
| span | 每个item所占的份数 | number | - | - |

