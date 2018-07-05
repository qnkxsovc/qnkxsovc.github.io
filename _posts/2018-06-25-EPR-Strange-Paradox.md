---
  layout: post
  title: EPR
  subtitle: "The Strange Paradox of Distance and Observation"
  tags: physics
  categories: concepts
---

$\newcommand{\bra}[1]{\langle #1 \vert}
\newcommand{\ket}[1]{\vert #1 \rangle}
\newcommand{\inner}[2]{\langle #1 \vert #2 \rangle}
\newcommand{\sqmag}[1]{\vert #1 \vert ^2}
\definecolor{lblue}{RGB}{74, 144, 226}
\definecolor{lred}{RGB}{208, 2, 27}
\newcommand{\rtext}[1]{ \color{lred} #1 \color{black} }
\newcommand{\btext}[1]{ \color{lblue} #1 \color{black} }
\newcommand{\rket}[1]{ \ket{ { \color{lred} #1 \color{black} } } } 
\newcommand{\bket}[1]{ \ket{ { \color{lblue} #1 \color{black} } } }
\newcommand{\rbket}[2]{ \ket{ { \color{lred} #1 } { \color{lblue} #2 \color{black} } } }$
I’ve just graduated high school, and I’m still grappling with the realization that I’m never going to have to take an extraneous course again. I can’t say I’ve *always* enjoyed excessive coursework from classes I didn’t choose, but they all usually have a silver lining. This is especially true of Physics, which is one of the courses I’m going to miss the most. Barring any drastic major changes, it will be difficult to seriously continue my physics education, so to cope with that fact I’ve directed my recent attention almost completely to a few good physics books. 

One of my favorite series is [The Theoretical Minimum](https://en.wikipedia.org/wiki/The_Theoretical_Minimum), which I admire for its constantly well-organized explanations and exercises. I recently finished the second volume, “Quantum Mechanics,” and all my friends already know because I keep bothering them about the interesting things it says. Since the prominent ideas all rely on an inhibitive amount of background knowledge, this post is my attempt at a amateur’s explanation in the style of another great book I’ve read recently: [QED](https://en.wikipedia.org/wiki/QED:_The_Strange_Theory_of_Light_and_Matter), by Richard Feynman. I will imitate Feynman's use of arrows, although I will try to add a bit more math so that readers can follow along if the abstraction fails them.

My goal is to explain the how quantum states are measured and modeled, what it really means to be “entangled,” and significant arguments informing QM interpretations such as the Einstein Podolsky Rosen Paradox and Bell’s Theorem.

## State of a Single System
The essential characteristic of a quantum system is that in many cases, there is no definite method to know the outcome of measurements on that system. It is likely that there is no such method, so instead we consider what results one might *expect* to see. 

At this point, I’d like to provide a visual abstraction that will help me explain quantum measurements. Consider some sort of arrow placed perpendicular to a surface:

[[Surface.svg]]

In this picture the arrow is fixed, but imagine an experiment in which it is allowed to fall to either the right or the left. You can recreate this experiment on the desk with a pencil. If you align your pencil perfectly, it will be difficult to predict which way the pencil would fall.

If, however, there is a draft in the room, or the table is slightly uneven, the arrow might be more likely to fall on a specific side. Regardless of its bias, once the experiment is completed and the arrow is laying on its side, there is no more chance, and the outcome is predictable. These characteristics are analagous to the important characteristics of quantum measurements:
- When a specific state is prepared, experimental outcomes may be undeterminable.
- However, there may be bias so that the experiment is somewhat *predictable*. 
- Subsequent experiments will always have the same result. 

For actual quantum systems, there is a mathematical framework that also captures these characteristics. We start by developing a representation of the arrow, which is “most intuitive” to describe in terms of its unambiguous states, left and right. We define two vectors, $\ket{l}$ and $\ket{r}$, using “Dirac Notation,” which is designed to allow for vector identification *without* reference to the components. These two vectors are called “kets.” The notation also makes it easy to write dot products and complex conjugations, which will become important soon.

The point of starting with left and right states is that we can compose them to create representations of the other possible states. Ideally, these representations should allow us to predict the results of dropping the arrow. If we define $\ket{l}$ and $\ket{r}$ to be orthogonal, as if one points up and the other points $90$ degrees to the side, they can be combined to describe any vector in their shared plane – this is a start. **We are still using them to represent parallel directions**, but defining them to be orthogonal allows them to represent a basis, like the familiar $\hat{i}$ and $\hat{j}$.

Using the new basis, we will add coefficients to represent the *probabilities* that the arrow will end up in each state. While it is not obvious, we must allow complex coefficients to represent all possible states, so instead of directly weighting the bases directly we will make probabilities out of the product of a coefficient and its *complex conjugate*, which is *equivalent to squaring the magnitude*. In fact, even if complex conjugates weren’t required, using the square root of a probability instead of the probability itself is helpful because it gives all of our state vectors magnitude $1$.

So, as an example, let’s consider the original experiment:
- Since $\ket{l}$ and $\ket{r}$ are equally likely, $P\left( l \right)  = P\left( r \right)  = \frac{1}{2}$.
- Our probability is also equal to the square of our coefficients: $c^2 = \frac{1}{2}$, $c = \pm \frac{1}{\sqrt{2}}$.
- This yields two possibilities: one vector $\ket{s}$ whose coefficients have the same signs, and one whose does not.
- We will call the former $\ket{u}$ (up) and the latter $\ket{d}$ (down).

{{raw}}<span style="text-align:center;display:block"> $$\ket{u} = \frac{1}{\sqrt{2}}\ket{l} + \frac{1}{\sqrt{2}}\ket{r}$$ <br /> $$\ket{d} = \frac{1}{\sqrt{2}}\ket{l} - \frac{1}{\sqrt{2}}\ket{r}$$ </span>{{endraw}}

I had previously mentioned Dirac’s notation, which we now have the opportunity to apply. In this notation, inner products are written $\inner{u}{v}$ – very simple. $\bra{u}$ is new: this is the notation for a “bra,” the complex conjugate of a corresponding ket $\ket{u}$. Imagine a new ket where all coefficients have been replaced by their conjugates and all basis vectors have been switched from bra-version to ket-version, or vice versa. *You can only take the inner product between a bra and a ket*, even though the transformation leaves real coefficients untouched. While this distinction may seem unimportant, it is crucial to allow more complex (this is a pun) calculations to have real outputs. I want to avoid giving so much detail that I could justify *every* conjugation, but generally they allow operations to take advantage of complex numbers while having real results.

 For any normalized ket, the inner product with itself is equal to $1$, as usual. For our mutually orthogonal kets, the inner product is $0$, which also follows from the usual definition of the inner product. Lastly, the operation is also distributive, so that $\bra{a} \left( \ket{b} + \ket{c} \right)  = \inner{a}{b} + \inner{a}{c}$. Let’s try to use these properties to simulate the running experiment. We will use our new notation to find the probability of the arrow falling to the right, given its initial state.

 1. Prepare a state $\ket{s} =  \frac{1}{\sqrt{2}}\ket{l} + \frac{1}{\sqrt{2}}\ket{r}$.
 2. $P\left( r \right) $ is determined by the coefficient on $\ket{r}$, which we can select using the inner product:

 {{raw}}<span style="text-align:center;display:block;margin-top:0px;margin-bottom:10px;">$$ \begin{align} \inner{r}{s} & = \frac{1}{\sqrt{2}}\inner{r}{l} + \frac{1}{\sqrt{2}}\inner{r}{r} \\ & = \frac{1}{\sqrt{2}} \left( 0 \right)  + \frac{1}{\sqrt{2}} \left( 1 \right)  = \frac{1}{\sqrt{2}} \end{align}$$ </span>{{endraw}}
 3. Finally, we square the magnitude of this coefficient: $P \left( r \right)  = \vert \inner{r}{s} \vert ^2$.

Another good experimental example is the calculation of probabilities for the outcomes of our unambiguous states: $\sqmag{\inner{r}{l}} = 0$, $\sqmag{\inner{r}{r}} = 1$, and so our original definition of the experiment is satisfied. Basis states will typically have numeric values associated with them as the outcomes of measurements. For example, $\ket{l}$ has $1$ and $\ket{r}$ has $-1$. That way, we can define the expected value as the sum of all possible outcomes weighted by their probabilities. In the absence of deterministic measurements, the expected value is the closest thing we can get to a specific value. For example, the expected value of this experiment is $\frac{1}{2} \left( 1 \right) + \frac{1}{2} \left( -1 \right) = 0$, which reflects the fact that the arrow isn’t biased to the left or right.

So far, we’ve developed the essential notation that will be used throughout the post. It is summarized below:
- $\ket{u}$ represents a state with a basis.
- The coefficients on these basis vectors determine experimental outcomes.
- We *use* these coefficients in the square magnitude of the inner product.
- Because of this, the basis vectors themselves represent “fallen arrows” with known outcomes.

## Expanding Our Measurments

The arrow experiment is good for developing some basic concepts, but at this point it is still a bit limited. Right now, our measurement consists of determing the probability for the arrow to end up on either the left or right, because these happen to be the two unambiguous states. These are not our only two options. Imagine taking the entire plane that the arrow is resting on and flipping *that* $90$ degrees. Now, without changing the state vector, it has become aligned to the surface. The same dropping experiment is now unabiguously “up,” even though the state vector hasn’t actually changed.

[[MovingSurface.svg]]

In any experiment, there are two ways to change the outcome. You can either change the thing you’re measuring, or change the information detected by the experiment itself. This is an example of the latter. Measuring different characteristics is key throughout physics because the only way to determine something about system for which you have no prior information is to *measure* it. In this example, there are some states for which measurement A might be definite while measurement B is completely uncertain. 

Keep in mind that uncertainty in B doesn’t mean we can’t try to measure its quantity. Just like in the first iteration of the experiment, we will see one of two outcomes, and later attempts will repeat that outcome. If we go back to measuring A, the initial measurement will again be uncertain. Our state vector seems to be jumping between positions that align with A and that align with B. This is crucial: *measuring a quantum state will disrupt that state*. When a state vector of combined basis states suddenly becomes only one upon measurement, it is said to have “collapsed.” Experiments don't always collapse the state vector into a state that creates uncertainty for other experiments. In fact, some experiments may have multiple equivalent unambiguous states, where these states turn out to be *unequivalent* unambiguous states for other experiments. The picture below demonstrates this idea with $\sigma$ and $\gamma$ experiments, which both have postive and negative outcomes. 

[[SimultaneousExperiments.svg]]

Mathematically, we have to introduce new ideas to represent these experiments. We want some “experiment operator” that will act on the state vector to tell us what results we could get, how likely they are, and which unambiguous states the system might collapse to. All the information about any possible experiment should be contained between the experiment operator and the state vector. That’s a lot of information – but luckily, it fits elegantly into a mathematical construct called a “linear operator.” Since it is likely that many students will not be familiar with matrices or linear operators, I will summarize their important characteristics and explain how they can be used here. As a point of technicality, I will actually be discussing *matrix operators*, which is a distinction you can read about [here](https://www.quora.com/What-is-the-difference-between-a-matrix-and-a-linear-operator).

An matrix operator $\sigma_{n \times m}$ is essentially a mapping from an input vector of size $n$ to an output vector $m$. In our case, we could make $n$ equal to $m$ so that the matrix describes state transitions, but in most cases the state just collapses into one of a few special states. Instead, we’ll use the mapping to create a new “intermediate vector” for calculating experimental outcomes, as a shortcut over the original $\vert \inner{a}{b} \vert ^2$. Using the operator this way is an arbitrary decision to make things easier that informs the structure of the matrix – it works because we design it that way. Specifically, we can set up our design so that the expected value of a measurement on $\ket{s}$ is $\bra{s} \sigma \ket{s}$. The intermediate vector is the result of the oeprator’s action on one of the two vectors besides it. 

Representing the unambiguous states with a matrix operator comes down to specifying that state’s vector and its associated numeric value. We can pair both of these together through [eigenvectors](http://mathworld.wolfram.com/Eigenvector.html) and [eigenvalues](http://mathworld.wolfram.com/Eigenvalue.html) (collectively, eigenpairs). An eigenvector is an operator input such that the operator’s output is the same vector, up to a multiplicative constant. This constant is the eigenvalue. It only makes sense to talk about specific eigenpairs because of the normalization constraint introduced during the discussion of complex components – otherwise any eigenvector could be scaled infinitely many ways as long as the eigenvalue counteracts that scaling. 

For example, the original $\ket{l}$ would be an eigenvector of the horizontal plane operator with eigenvalue $1$. That is to say, $\mathbb{HP} \ket{l} = \ket{l}$. Similarly, $\mathbb{HP} \ket{r} = - \ket{r}$. It is easy to see that because the inner product of a vector and itself is $1$, the expected value for any unambiguous state is just that state’s eigenvalue, which matches the idea that this state will always be realized by the experiment.

Finally, experiments whose results don't interfere with each other have "simultaneous eigenvectors." For example, $\sigma \ket{\sigma^+ \gamma^-} = \lambda_1 \ket{\sigma^+ \gamma^-}$, $$\gamma \ket{\sigma^+ \gamma^-} = \lambda_2 \ket{\sigma^+ \gamma^-}$, and $\sigma \gamma \ket{\sigma^+ \gamma^-} = \gamma \sigma \ket{\sigma^+ \gamma^-} = \lambda_1 \lambda_2 \ket{\sigma^+ \gamma^-}$. These equations also demonstrate why such experiments are said to "commute," whereas noncommuting experiments would collapse the state vector differently and violate the last equality. You can think of noncommuting experiments in terms of the following image: each experiment collapses the state vector into a state that is uncertain for the other experiment.

[[NoncommutingExperiments.svg]]

Thus, matrix operators allow us to encapsulate the three pieces of information that, along with a state vector, completely describe an experiment: 
1. The result will be one of the eigenvalues.
2. Their likelihoods are described by way of the intermediate vector and the resulting expected value.
3. The system will collapse into one the corresponding eigenvector.

## Measurements on Two Systems
Now that we’ve developed our experiments for single systems, we can continue to expand to “combined systems.” A combined system is exactly what it sounds like: multiple systems put together. These systems are treated as single systems with single outcomes, but this can be confusing because all results are combinations of results from the constituent systems.

[[Combined Systems.svg]]

Mathematically, we combine independent quantum systems similarly to the way we combine independent joint probabilities: by multiplying them together, albeit with a very specific kind of multiplication. We have to use the [tensor product](http://mathworld.wolfram.com/VectorSpaceTensorProduct.html), which is one of the many different ways one can multiply two matrices together. This method is desirable because the tensor product of a $u$ dimensional vector and a $v$ dimensional vector has dimension $uv$. So, a tensor product of $2$-dimensional vectors $\ket{uv} = \ket{u} \otimes \ket{v}$ has $4$ dimensions. Our new four dimensional basis vectors are $\rbket{l}{r}$, $\rbket{l}{l}$, $\rbket{r}{l}$, and $\rbket{r}{r}$. We can also combine operators by taking their tensor product. If we only want to measure $\rtext{HP}$, for example, we can create a combination operator $\rtext{HP} \otimes \btext{I}$, where $\btext{I}$ is the $2 \times 2$ identity matrix. In this case, $\rtext{HP} = \btext{HP} = HP$, which is to say that the colors’ only purpose is to help us keep track of what system things correspond to. 

This operator example is special because it demonstrates an interesting characteristic of combined systems. Even though we consider them as a whole, it is possible for experiments to act only on a part of the system. Consider the hypothetical combination of $\rket{s}$ and $\bket{l}$, where $\rtext{s}$ is the half-left/half-right ket for the red experiment and $\btext{l}$ is the left ket for the blue experiment. $\rtext{HP} \otimes \btext{I}$ will only collapse the red half of the combination vector, so that the only possible results are $\rbket{r}{l}$ and $\rbket{l}{l}$. The state vector for the *system as a whole* would be $\ket{c} = \frac{1}{\sqrt{2}} \rbket{r}{l} + \frac{1}{\sqrt{2}} \rbket{l}{l}$. Up to this point, state combinations and measurements are fairly intuitive.

Quantum systems start to create paradoxes once you explore the different states a combined experiment can take on. For example, $\ket{e} = \frac{1}{\sqrt{2}} \rbket{l}{r} + \frac{1}{\sqrt{2}} \rbket{r}{l}$ is a perfectly valid combined state with two equally likely outcomes. You can infer the state of the overall system by testing any of the constituent systems, because all of the possibilities have unique outcomes for all of the constituents. Testing a single system is equivalent to testing the whole system. So, regardless of whether or not you start on red or blue systems, the outcome of the first test will be completely uncertain (because all possibilities are equally likely) but the outcome of the second test will be completely certain (because the combined system has collapsed). Because measurements on one system affect the outcome of others, the two are said to be "entangled." It seems that the first system's outcome influences the second system, but this effect persists even over distances large enough that any direct effect would have to move faster than light.

Entanglement phenomena is one of the highly popularized examples of "quantum weirdness," and now that we understand it we can investigate some of the different arguments about how to interpret these results.

## Einstein-Podolsky-Rosen Paradox

The Einstein-Podolsky-Rosen (EPR) Paradox is argument that attempts to show that quantum theory is incomplete. In this case, "incompleteness" would imply that there is relevant information to the systems quantum mechanics attempts to describe that cannot be expressed in the quantum mechanical framework. Ideally, even if these hidden variables couldn't be known, the shared information might explain how entangled particles seem to coordinate their outcomes.

While quantum mechanics does technically predict experimental outcomes, many physicists viewed its probabilistic nature as a cop out. Furthermore, classical theories generally yeild results by providing insight into the mechanics of a system. Quantum mechanics cop out again: there is no attempt to try to explain *why* systems behave this way. Proving its incompleteness makes sense as a goal for physicists who weren't satisfied with its theories, despite its agreement with evidence.

Given what we already know about entanglement, the EPR Paradox doesn't rely on much extra information. To set up the argument, the authors introduce a criteria for measurements to correspond to real, physical states: 
> If, without in any way disturbing a system, we can predict with certainty (i.e., with probability equal to unity) the value of a physical quantity, then there exists an element of reality corresponding to that quantity.

Essentially, this criteria asserts that if a measurement is unambiguous, there is a definite physical state to which the measurement corresponds. They assert the connection between our eigenvectors, *which represent the state of a particle*, and the eigenvalues, which are measurements resulting from that state. The nuance here is that they've also linked the "realness" of a physical state to the fact that it can be measured. They're not only saying that measurements imply some abstract mathematical representation of the state, they're saying that they imply real physical entities (elements of reality) too. 

After this assertion, the first main part of the argument is that **either** quantum mechanics is incomplete **or** position and momentum cannot exist simultaneoulsy. When, using the quantum mechanics framework, one defines experiment operators to measure a particle's position and momentum, there is no possible set of simultaneous eigenvectors – like the earlier example of noncommuting experiments, these two measurements just don't work out together. Because of the assertion, this conflict would mean that there also can't be a real physical entity having both position and momentum. Naturally, this is either a fundamental aspect of the universe or there is a flaw in our framework.

The second part of the argument attempts to demonstrate that there *can* be a real physical entity having both position and momentum. Consider an entangled system of two particles. They are assumed to have their own independent states (real physical entities) and it is also assumed that if the particles are separated, they can't instantly affect each other's state in any way. So, when the two systems are apart, their states are completely separated. Like the previous entanglement example, these systems happen to be entangled such that measurements on one system determine the inevitable outcome of the same measurement for the other. So, if the two particles are separated so that they can't affect each other, then measuring the the position or momentum of the first gives a value for the second, indicating a corresponding real physical entity for that quantity. But, the experimenter could have just as easily measured the other quantity to get a value for the second system. In either case the second system's state is the same, because it has a separate physical state that can't be affected by measurements on the first system. Since position and momentum can be determined from what must be the same state, the second system's state is a real physical entity having both quantities.

The result of this argument is that only one of the two possibilities provided by the first part is valid: that quantum mechanics is incomplete. However, this result rests on the two crucial assumptions in the second part, which we will see become suspect as a result of Bell's Theorem.

## Bell's Theorem
