# API 文档

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- |------|:----:|-----|:-----:|
| type | 数据来源类型，包含远程和本地两种| string | remote, local | remote |
| data | 数据集合，仅在 type='local' 时有效 | array | - | - |
| url | 后端数据接口 | string | - | - |
| method| 接口请求方式 | string | get, post, delete, put | get |
| auto-load | 是否默认加载数据 | boolean | true, false | true |
| headers | 请求头信息 | object | - | - |
| list-field | 接口返回值对应数据的字段值 | string | - | data.records |
| total-field | 接口返回值对应数据总数的字段值 | string | - | data.total |
| params | 搜索参数 | object | - | - |
| data-handler | 数组数据的 map 处理函数 | function | - | - |
| columns | table column配置对象的数组。具体配置见下面[**Table column 属性**](#table-column-属性) | array | - | - |
| show-pagination | 是否显示分页组件，如设为false，查询时不传分页参数 | boolean | true, false | true |
| page-sizes | 每页显示个数的控件选项 | array | - | [15, 30, 50] |
| pagination-layout | 分页控件的结构，每个类型用逗号分隔 | string | sizes, prev, pager, next, jumper, ->, total, slot | total, prev, pager, next, jumper, sizes |
| page-index-key | 参数：页码数 的 key 值 | string | - | pageIndex |
| page-size-key | 参数：每页展示个数 的 key 值 | string | - | pageSize |
| table-style | 传递给`el-table`的样式style | string | - | width:100%;margin-top:0px; |
| customSort | 是否采用默认排序字段 | boolean | true,false | false |
| infiniteScroll | 是否开启滚动加载 | boolean | true,false | true,false |
| setupSort | 是否开启拖动排序 | boolean | true,false | false |
| sortClass | 当setupSort为true时，运行拖动按钮的class | string |                                                   | .icon-yidongdao |

注：更多属性，请参考 Element UI [Table 组件的文档](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/table.md#table-attributes)。

支持的`Element UI Table`属性有：stripe / border / height / max-height / fit / show-header / highlight-current-row / current-row-key / row-class-name / row-style / row-key / empty-text / default-expand-all / expand-row-keys / default-sort / tooltip-effect / show-summary / sum-text / summary-method / size。
## 函数

| 方法名 | 说明 | 参数 |
| ----- |-----|-----|
| refreshData | 重新搜索数据，参数表示是否重置分页为1，默认为true。使用方法`this.$refs['el-search-table'].refreshData()`（例中`ELTableSP`的`ref`属性为`el-search-table`） | refresPage |
| requestDone | 返回表格的所有数据 | tableData |
| requestDoneAll | 返回接口的原始数据 | response |
| pagination | 当分页数据发生变化是，返回的函数 | - |

## Table column 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- |------|:----:|-----|:-----:|
| prop | 展示字段的字段值 | string | - | - |
| label | 列名 | string | - | - |
| width| 列宽 | number | - | 140 |
| minWidth | 最小列宽 | number | - | - |
| filter | 过滤器名（只有配置在全局的filter才有效） | string | - | - |
| render | 处理数据的函数，接收行数据作为参数 | function | - | - |
| slotName | 使用 slot 标记的代码块的 slot 属性值，当slotName为editor时，将开启真假输入框模式，**详情请参考代码示范** | string | - | - |
| type | Element UI Table支持的一个属性，借用这个属性来切换是否使用本组件column内的插槽内容，当本属性没有给值时，本组件保持和之前版本一样的兼容性，组件会接管column数组中的定义并定义Element UI Table Column，只有指定的属性才会给予，并且会实现组件中给予的`render`和`formatter`等功能。如果该属性一旦有给值时，`column`定义的所有属性都会传递给Element UI Table Column，本组件也不会对column内容进行处理，相应的处理能力也交给Element UI Table本身，通过这种方式，也可以支持Element UI Table中的多选列，Index列等，设置为`default`也即为Element UI Table的缺省模式，会从数据对象中读取`prop`属性，也会受到`filter`的过滤，只不过处理都是Element UI Table来进行了。 | string | default/selection/index/expand |  |
| showOverflowTooltip | 字段超出是否浮框显示 | boolean |  | true |
|  |  |  | |  |

更多属性，请参考 Element UI [Table column 的文档](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/table.md#table-column-attributes)。

支持的`Element UI Table column`属性有：column-key / fixed / render-header / sortable / sort-by / sort-method / resizable / formatter / show-overflow-tooltip / align / header-align / class-name / label-class-name / selectable / reserve-selection / filters / filter-placement / filter-multiple / filter-method / filtered-value 。

注：关于`formatter`属性，如果定义了`renderer`或者`filter`的时候，`formatter`不起作用。

## Slots

| slot名称 | 说明 |
| ---- |-----|
| form | table 上部展示一个搜索区域，该`slot`下通过`scope`可以访问到两个属性：loading（查询中的loading状态值），search（搜索方法）|
| prepend | table中，在最左边添加的列 |
| append | table中，在最右边添加的列，一般可放置`操作列` |

## Events

| 事件名 | 说明 | 参数 |
| ---- |-----| ----- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, event, column |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件| row, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change | 当用户对某一行展开或者关闭的上会触发该事件 | row, expanded |

