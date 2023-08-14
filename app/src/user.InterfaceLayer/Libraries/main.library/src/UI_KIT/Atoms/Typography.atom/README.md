# TypographyAtom текстовые элементы 
Здесь описаны общие подборки тегов для текста
с возможностью кастомизации из свойств
```
<Typography as={Tags.h1}>
	Lorem ipsum dolor sit amet consectetur.
</Typography>
``` 
Для указания какой html тег необходим исполизуется свойство "as" 
возможные входящие в него значения описаны в интерфейсе по пути
UI_KIT/Atoms/Typography.atom/enum/:
Также там описаны варианты шрифтов используемые в данном проекте
с указанием где на станице используются стилизованные теги: (h1,h2,h3,p,p1,p2,p4,span)
### Тип тега:
- тег      - as                  (пример: as={Tags.h1} )    
### Свойства текста:
- размер   - font_size           (пример: font_size={"50px"}                                )
- семейсво - family              (пример: family={fonts.Nunito}  или family={"Nunito"}      )
- цвет     - color               (пример: color={Colors.BLACK}   или color={"#FFFFFF"}      )
- интервал - line_height         (пример: line_height={"100%"}   или line_height={"normal"} )
- жирность - weight              (пример: weight={800}           или 400 | 600              )
- стиль    - font_style          (пример: font_style={"normal"}  или font_style={"italic"}  )
### MediaQuery передаваемые в элемент
По дизайну проекта предусмотрены BreakPoints 
добавлены свойства уставновки размера(font_size) 
применияемые при изменения размеров экрана(viewport):
- при TABLE        (~1440px) - large_mq     (пример: large_mq={"50px"} )
- при MOBILE       (~740px)  - medium_mq    (пример: medium_mq={"36px"})
- при SMALL_MOBILE (~359)    - small_mq     (пример: small_mq={"30px"} )
 
	SMALL_MOBILE = 359,
	MOBILE = 768,
	TABLET = 1024,

Важное примечание: использование "font_size" сов 
 export interface IText extends TextProps {
	as: Tags;
	children?: JSX.Element | ReactNode;
}

export interface TextProps extends ICommonComponentProps,MediaQuerySize {
	font_size?: string;
	color?: string| Colors;
	weight?: number;
	line_height?: string;
	family?: string;
	font_style?: string;
}
export interface MediaQuerySize {
	small_mq?: string;
	medium_mq?: string;
	large_mq?: string;
}
font_size,
	family,
	line_height,
	color,
	weight,
	large_mq,
	medium_mq,
	small_mq,
	font_style,